// src/pages/subscription.js
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// Component con để hiển thị các nút PayPal và xử lý loading state
// Điều này giúp tránh việc render lại toàn bộ trang khi script đang tải
const PaypalButtonWrapper = ({ planId, currency, onPaymentSuccess, onPaymentError }) => {
  const [{ options, isPending, isRejected, isResolved }, dispatch] = usePayPalScriptReducer(); // Hook để lấy trạng thái tải SDK

  useEffect(() => {
    // Nếu bạn cần thay đổi options của script (ví dụ currency) sau khi đã tải,
    // bạn có thể dùng dispatch để reset options.
    // dispatch({
    //   type: "resetOptions",
    //   value: {
    //     ...options,
    //     currency: currency,
    //   },
    // });
  }, [currency, dispatch, options]);


  if (isPending) {
    return <div className="paypal-loading">Loading PayPal buttons...</div>;
  }
  if (isRejected) {
    return <div className="paypal-error">Error loading PayPal script. Please try refreshing.</div>;
  }
  if (isResolved && !window.paypal) { // Đôi khi isResolved nhưng paypal object chưa sẵn sàng ngay
    return <div className="paypal-loading">Initializing PayPal...</div>;
  }

  return (
    <PayPalButtons
      style={{
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'subscribe'
      }}
      createSubscription={(data, actions) => {
        return actions.subscription.create({
          plan_id: planId
        });
      }}
      onApprove={(data, actions) => {
        // data.subscriptionID chứa ID của subscription vừa tạo
        console.log("Subscription approved:", data.subscriptionID);
        onPaymentSuccess(data.subscriptionID);
        // Bạn không cần actions.subscription.get() ở đây trừ khi muốn lấy chi tiết ngay lập tức
        // Thông tin subscriptionID là đủ để gửi lên server của bạn
        return Promise.resolve(); // Bắt buộc return Promise
      }}
      onError={(err) => {
        console.error("PayPal Button Error:", err);
        onPaymentError(err);
      }}
      onCancel={(data) => {
        console.log("Subscription cancelled:", data);
        // Xử lý khi người dùng hủy bỏ popup PayPal
        // onPaymentError("Subscription cancelled by user."); // Hoặc không làm gì cả
      }}
    />
  );
};


function SubscriptionPage() {
  const [paymentState, setPaymentState] = useState('initial'); // 'initial', 'processing', 'success', 'error'
  const [apiKey, setApiKey] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const apiKeyInputRef = useRef(null);

  const YOUR_PAYPAL_CLIENT_ID = "ASByEaLQpwtuhJSUj-aff0rt1wB5aT6-oIHREePO430o678gYU4Pk4_y_RSpaFYAqejRtmYE8ovHr9u_";
  const MONTHLY_PLAN_ID = 'P-2GK46629CT581105BNBLDPZI';
  const YEARLY_PLAN_ID = 'P-0KM8981601503625VNBLDQQQ';
  const PAYMENT_HANDLER_ENDPOINT = "https://payment-10213.deno.dev";

  const paypalOptions = {
    "client-id": YOUR_PAYPAL_CLIENT_ID,
    components: "buttons",
    intent: "subscription",
    vault: true, // Bắt buộc cho subscription
    // currency: "USD" // Bạn có thể đặt currency ở đây nếu tất cả plan đều chung
  };

  const handlePaymentSuccess = (subscriptionID) => {
    setPaymentState('processing');
    fetch(PAYMENT_HANDLER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionID: subscriptionID })
    })
    .then(res => {
      if (!res.ok) throw new Error(`Server response was not OK: ${res.status}`);
      return res.json();
    })
    .then(responseData => {
      console.log("Server response:", responseData);
      if (responseData && responseData.response && responseData.response.api && responseData.response.expireDate) {
        setApiKey(responseData.response.api[0]);
        setExpireDate(responseData.response.expireDate);
        setPaymentState('success');
      } else {
        throw new Error("Invalid responseData structure from server.");
      }
    })
    .catch(err => {
      console.error("Error sending subscriptionID or processing response:", err);
      setPaymentState('error');
      alert(`An error occurred while processing the transaction: ${err.message}. Please contact support.`);
    });
  };

  const handlePaymentError = (error) => {
    // Có thể bạn muốn hiển thị thông báo lỗi cụ thể hơn dựa trên `error`
    console.error("Payment Error:", error);
    setPaymentState('error');
    alert("An error occurred with the payment. Please Contact support.");
  }

  const handleCopyApiKey = () => {
    if (apiKeyInputRef.current) {
      apiKeyInputRef.current.select();
      apiKeyInputRef.current.setSelectionRange(0, 99999);
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(apiKeyInputRef.current.value)
            .then(() => alert("API key copied to clipboard!"))
            .catch(err => {
              console.warn("navigator.clipboard.writeText failed, falling back to execCommand.", err);
              document.execCommand("copy");
              alert("API key copied to clipboard (using fallback)!");
            });
        } else {
          document.execCommand("copy");
          alert("API key copied to clipboard!");
        }
      } catch (err) {
        alert("Failed to copy API key. Please copy it manually.");
        console.error('Failed to copy API key: ', err);
      }
    }
  };

  if (paymentState === 'success') {
    return (
      <Layout title="Subscription Successful" description="Thank you for subscribing to Langki.">
        <main className="subscription-page-wrapper">
          <div className="thank-you-message-container">
            <h2>Thank You!</h2>
            <p>Thank you for subscribing and funding the <strong>Langki</strong> project.</p>
            <p>Here is your API key:</p>
            <div className="api-key-container">
              <input
                ref={apiKeyInputRef}
                id="apiKeyDisplay"
                type="text"
                value={apiKey}
                readOnly
              />
              <button onClick={handleCopyApiKey} className="copy-button">
                Copy 

                
              </button>
            </div>
            <p>
              To learn more about using the API key, please read <a href="https://langki.net/docs/langki_configuration#api-key-for-subscribers" target="_blank">this article</a>.
              The key is valid until <strong>{new Date(expireDate).toLocaleDateString()}</strong>.
            </p>
          </div>
        </main>
        <style jsx>{`
          /* ... CSS cho trang success không đổi ... */
          .subscription-page-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(80vh - var(--ifm-navbar-height)); /* Adjust as needed */
            padding: 20px;
          }
          .thank-you-message-container {
            font-family: Arial, sans-serif;
            max-width: 500px;
            width: 100%;
            padding: 30px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
            text-align: center;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            background-color: var(--ifm-card-background-color, var(--ifm-background-surface-color));
            border-radius: 8px;
            padding: 1rem;
            margin: 2rem 1rem;
            border: 1px solid var(--ifm-color-emphasis-300);
            border-radius: var(--ifm-card-border-radius, 8px);
            background-color: var(--ifm-card-background-color, var(--ifm-background-surface-color));
            box-shadow: var(--ifm-global-shadow-lw);
          }
          .thank-you-message-container h2 { color: var(--ifm-font-color-secondary); margin-bottom: 20px; }
          .thank-you-message-container p { font-size: 16px; color: var(--ifm-font-color-secondary); line-height: 1.6; margin-bottom: 15px; }
          .api-key-container { display: flex; align-items: center; margin: 20px 0; }
          .api-key-container input { flex: 1; padding: 10px; font-size: 14px; border: 1px solid #ccc; border-radius: 5px; margin-right: 10px; }
          .copy-button { padding: 10px 15px; font-size: 14px; background-color: #007BFF; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.2s; }
          .copy-button:hover { background-color: #0056b3; }
        `}</style>
      </Layout>
    );
  }

  if (paymentState === 'error') {
     return (
      <Layout title="Subscription Error" description="There was an error with your subscription.">
        <main className="subscription-page-wrapper">
          <div className="container" style={{textAlign: 'center', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
            <h1>Subscription Error</h1>
            <p>We encountered an error processing your subscription. Please <a href="https://langki.net/contact">contact us</a> for further support. We're really sorry for the inconvenience.</p>
            <button onClick={() => setPaymentState('initial')} style={{padding: '10px 20px', backgroundColor: '#5a67d8', color: 'var(--ifm-font-color-secondary)', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
              Try Again
            </button>
          </div>
        </main>
        <style jsx>{`
          .subscription-page-wrapper { /* ... như trên ... */ }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout title="Langki Subscription" description="Choose your Langki subscription plan.">
      <PayPalScriptProvider options={paypalOptions}>
        <main className="subscription-page-wrapper">
          <div className="container">
            <div className="important-notice">
              <p>
                Langki is free for everyone; you don't even need to sign up to use it. No feature is hidden behind a paywall. However, it takes money and time to maintain the server and fulfill each request. Even just a few cents per user each day can accumulate into hundreds of dollars by the end of the month as the user base grows. Therefore, we set a daily usage quota to ensure fair access for all. Langki relies on the support of subscribers to stay up and running. If you're a heavy user or believe in the potential of the project, please consider subscribing. With just a cup of coffee a month, you help fund the project to keep it going. In return, you'll gain unlimited access, a more reliable server, and priority technical support.
              </p>


            </div>
            {paymentState === 'processing' && (
              <div style={{ margin: '20px', padding: '20px', backgroundColor: '#eef', borderRadius: '5px', border: '1px solid #ccf' }}>
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Processing your payment, please wait...</p>
              </div>
            )}
            <div className="subscription-options" style={{ display: paymentState === 'processing' ? 'none' : 'flex' }}>
              {/* One Month Plan */}
              <div className="plan-card">
                <div>
                  <h2>Langki - One Month Unlimited Usage</h2>
                  <div className="price">$5.99 <span>/ month</span></div>
                  <ul className="features">
                    <li>Unlimited text-to-speech</li>
                    <li>Unlimited speech-to-text</li>
                    <li>Unlimited speech analysis</li>
                    <li>Unlimited AI messages</li>
                    <li>Unlimited flashcard generation</li>
                  </ul>
                </div>
                <div className="paypal-button-container">
                  <PaypalButtonWrapper
                    planId={MONTHLY_PLAN_ID}
                    currency="USD" // Hoặc lấy từ cấu hình plan nếu khác nhau
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  />
                </div>
              </div>

              {/* One Year Plan */}
              <div className="plan-card">
                <div>
                  <h2>Langki - One Year Unlimited Usage</h2>
                  <div className="price">$4.00 <span>/ Month</span></div>
                  <p className="savings-note">Billed annually at $48.00</p>
                  <ul className="features">
                    <li>Unlimited text-to-speech</li>
                    <li>Unlimited speech-to-text</li>
                    <li>Unlimited speech analysis</li>
                    <li>Unlimited AI messages</li>
                    <li>Unlimited flashcard generation</li>
                  </ul>
                </div>
                <div className="paypal-button-container">
                   <PaypalButtonWrapper
                    planId={YEARLY_PLAN_ID}
                    currency="USD"
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </PayPalScriptProvider>

      <style jsx>{`
        /* ... CSS gốc không đổi (như trong câu trả lời trước) ... */
        .subscription-page-wrapper {
          font-family: sans-serif;
          line-height: 1.6;
          color: var(--ifm-font-color-secondary);;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: calc(85vh - var(--ifm-navbar-height));
          padding: 20px;
        }
        .container h1 { color: var(--ifm-font-color-secondary); margin-bottom: 30px; }
        .subscription-options { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .plan-card { 
          background-color: #ffffff; 
          border: 1px solid #ddd; 
          border-radius: 8px; padding: 
          20px; width: 300px; 
          text-align: left; 
          box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
          transition: transform 0.3s ease-in-out, 
          box-shadow 0.3s ease-in-out; 
          display: flex; 
          flex-direction: column; 
          justify-content: space-between; 
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: var(--ifm-card-border-radius, 8px);
          background-color: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          box-shadow: var(--ifm-global-shadow-lw);
        }
        .plan-card:hover { transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
        }
        .plan-card h2 { 
          color: var(--ifm-font-color-secondary);
          margin-top: 0; 
          margin-bottom: 10px; 
          font-size: 1.4em; 
          color: var(--ifm-link-color);
          text-decoration: var(--ifm-link-decoration);
        }
        .plan-card .price { font-size: 2em; color: var(--ifm-font-color-secondary); margin-bottom: 5px; }
        .plan-card .price span { font-size: 0.5em; color: var(--ifm-font-color-secondary);; }
        .plan-card .savings-note { font-size: 0.9em; color: var(--ifm-font-color-secondary); font-weight: bold; margin-bottom: 15px; }
        .plan-card .features { list-style: none; padding: 0; margin: 15px 0; flex-grow: 1; }
        .plan-card .features li { margin-bottom: 8px; padding-left: 20px; position: relative; }
        .plan-card .features li::before { content: '✓'; color: var(--ifm-font-color-secondary); position: absolute; left: 0; font-weight: bold; font-size: 1.1em; }
        .paypal-button-container { margin-top: 15px; text-align: center; width: 100%; min-height: 50px; /* Cho loading state */ }
        .paypal-button-container .paypal-loading, .paypal-button-container .paypal-error { font-size: 0.9em; color: var(--ifm-font-color-secondary); padding: 10px; }
        @media (max-width: 768px) {
          .subscription-options { flex-direction: column; align-items: center; }
          .plan-card { width: 90%; max-width: 350px; }
        }
        @media (max-width: 380px) {
            .plan-card { width: 95%; padding: 15px; }
            .plan-card h2 { font-size: 1.2em; }
            .plan-card .price { font-size: 1.8em; }
        }
        .important-notice {
          background-color: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          border-radius: 8px;
          padding: 1rem;
          margin: 2rem 1rem;
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: var(--ifm-card-border-radius, 8px);
          background-color: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          box-shadow: var(--ifm-global-shadow-lw);
        }
      `}</style>
    </Layout>
  );
}

export default SubscriptionPage;