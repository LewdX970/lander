// 1. Define the entire HTML content for the lander as a JavaScript string.
// We use a template literal (backticks ``) to easily handle multi-line content.
const landerHTML = `
<!DOCTYPE html>
<html lang="en"><head>
   <!--Optional, send client hints to get accurate device data-->
<meta http-equiv="delegate-ch" content="sec-ch-ua https://rtx.go2rewrds.com; sec-ch-ua-mobile https://rtx.go2rewrds.com; sec-ch-ua-arch https://rtx.go2rewrds.com; sec-ch-ua-model https://rtx.go2rewrds.com; sec-ch-ua-platform https://rtx.go2rewrds.com; sec-ch-ua-platform-version https://rtx.go2rewrds.com; sec-ch-ua-bitness https://rtx.go2rewrds.com; sec-ch-ua-full-version-listhttps://rtx.go2rewrds.com; sec-ch-ua-full-version https://rtx.go2rewrds.com">

<!-- MaxConv (conditional on ttclid) -->
<script type="text/javascript" async="" src="https://analytics.tiktok.com/i18n/pixel/static/identify_9ec98888.js"><\/script><script type="text/javascript" async="" src="https://analytics.tiktok.com/i18n/pixel/static/main.MWIyNTg0NDI1MQ.js" data-id="D39RN4RC77U0JLJ5JN60"><\/script><script type="text/javascript" async="" src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=D39RN4RC77U0JLJ5JN60&amp;lib=ttq"><\/script><script>new URLSearchParams(location.search).get('ttclid')&&!function(w,d,o,n,c){w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};var s=d.createElement(n),t=d.getElementsByTagName(n)[0];s.async=!0;s.defer=!0;s.src="https://rtx.go2rewrds/t/t.js";t.parentNode.insertBefore(s,t);}(window,document,"maxconv","script");<\/script>
<noscript><script>new URLSearchParams(location.search).get('ttclid')&&document.write('<link rel="stylesheet" href="https://rtx.go2rewrds.com/t/t.css?mc_ns=1" />');<\/script><\/noscript>
<!-- End MaxConv Tracking Script Base Code-->
<!-- TikTok Pixel Code Start -->
<script>
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
    var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
    ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
    
    
      ttq.load('D39RN4RC77U0JLJ5JN60');
      ttq.page();
    }(window, document, 'ttq');
    <\/script>
<!-- TikTok Pixel Code End -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>Cash Rewards</title>
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            -webkit-tap-highlight-color: transparent;
        }

        html {
            font-size: 14px;
        }

        body {
            background: linear-gradient(to bottom, white, #f9fafb);
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        .alert {
            position: fixed;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            width: calc(100% - 2rem);
            max-width: 20rem;
            animation: slideDown 0.5s ease-out;
            border: 1px solid #e5e7eb;
            z-index: 50;
            font-size: 0.875rem;
        }

        @keyframes slideDown {
            from {
                transform: translate(-50%, -100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }

        .alert-icon {
            color: #00D72E;
            font-size: 1.5rem;
            flex-shrink: 0;
        }

        .main-content {
            width: 100%;
            max-width: 24rem;
            padding: 1rem;
            margin: 0 auto;
            padding-bottom: 8rem;
            animation: scaleIn 0.5s ease-out;
            zoom: 1.1;
        }

        .timer {
            background: #22c55e;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-weight: 600;
            margin: 1rem 0;
            font-size: 0.875rem;
        }

        .card {
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin: 1rem 0;
            animation: fadeInUp 0.5s ease-out backwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .card h2 {
            color: #1f2937;
            font-size: 1rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
        }

        .check-item {
            background: #f9fafb;
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .check-circle {
            width: 1.5rem;
            height: 1.5rem;
            background: #22c55e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 0.75rem;
            flex-shrink: 0;
        }

        .check-text {
            flex: 1;
        }

        .check-title {
            font-weight: 500;
            color: #1f2937;
            font-size: 0.875rem;
        }

        .check-subtitle {
            color: #22c55e;
            font-size: 0.75rem;
        }

        .cta-button {
            position: fixed;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            background: #22c55e;
            color: white;
            padding: 0.875rem 2rem;
            border-radius: 9999px;
            font-weight: bold;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            width: calc(100% - 2rem);
            max-width: 24rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: transform 0.2s;
            z-index: 40;
            animation: buttonPulse 2s infinite;
        }

        @keyframes buttonPulse {
            0% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.02); }
            100% { transform: translateX(-50%) scale(1); }
        }

        .cta-button:active {
            transform: translateX(-50%) scale(0.98);
        }

        .faq-item {
            background: #f9fafb;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 0.5rem 0;
        }

        .faq-question {
            color: #22c55e;
            font-weight: 600;
            font-size: 0.813rem;
            margin-bottom: 0.25rem;
        }

        .faq-answer {
            color: #4b5563;
            font-size: 0.75rem;
        }

        .rewards-img {
            width: 100%;
            border-radius: 0.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        #nameAlert {
            display: none;
        }

        .ripple {
            position: absolute;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            opacity: 0;
            animation: rippleEffect 2s linear infinite;
        }

        @keyframes rippleEffect {
            0% {
                transform: scale(0.5);
                opacity: 0;
            }
            50% {
                opacity: 0.2;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }

        .animated {
            animation-delay: calc(var(--index) * 0.1s);
        }
    </style>
</head>
<body>
    <div id="nameAlert" class="alert" style="display: none;">
        <div class="alert-icon">💵</div>
        <div><span class="name">Luna W.</span> just received bonus!</div>
    </div>

    <div class="main-content">
        <br><br>
        <img src="cash4.png" alt="Cash Rewards" class="rewards-img">
        
        <div class="timer">
            ⏰ <span id="timer">29:53</span>
        </div>

        <div class="card" style="--index: 1">
            <h2>Quick Start Guide →</h2>
            <div class="check-item">
                <div class="check-circle">✓</div>
                <div class="check-text">
                    <div class="check-title">Complete 2-3 required deals</div>
                    <div class="check-subtitle">Earn good bonuses</div>
                </div>
            </div>
            <div class="check-item">
                <div class="check-circle">✓</div>
                <div class="check-text">
                    <div class="check-title">Provide a valid email address</div>
                    <div class="check-subtitle">For instant notification</div>
                </div>
            </div>
            <div class="check-item">
                <div class="check-circle">✓</div>
                <div class="check-text">
                    <div class="check-title">Ensure you are 18 years or older</div>
                    <div class="check-subtitle">Required</div>
                </div>
            </div>
        </div>

        <div class="card" style="--index: 2">
            <h2>Common Questions →</h2>
            <div class="faq-item">
                <div class="faq-question">How long do the deals take?</div>
                <div class="faq-answer">Quick 10-20 minute completion time per deal</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">What are deals?</div>
                <div class="faq-answer">Simple tasks like app downloads, surveys, or trial subscriptions with specific reward goals</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">How many deals do I need?</div>
                <div class="faq-answer">Complete as many as you want - rewards sent upon completion</div>
            </div>
        </div>
    </div>

    <button class="cta-button" onclick="handleClick()">
        Start Earning Now →
        <div class="ripple"></div>
    </button>

    <script>
        const NAMES = [
            'Ava R.', 'Ethan T.', 'Luna W.', 'Caleb R.', 'Aria K.',
            'Julian P.', 'Piper S.', 'Gabriel L.', 'Sofia G.', 'Alexander T.',
            'Mia M.', 'Logan D.', 'Isabella W.', 'Benjamin R.', 'Charlotte K.',
            'Oliver P.', 'Abigail S.', 'Elijah L.', 'Emily G.', 'William T.',
            'Harper M.', 'Lucas D.', 'Amelia W.', 'Mason R.', 'Evelyn K.',
            'Liam P.', 'Hannah S.', 'Noah L.', 'Abigail G.', 'Ethan T.'
        ];

        // Server-side tracking function with ttclid support
        async function trackServerSideEvent(eventType, userData = null, properties = null) {
            try {
                // Get ttclid from URL
                const urlParams = new URLSearchParams(window.location.search);
                const ttclid = urlParams.get('ttclid') || '';
                
                const response = await fetch('/track-tiktok-event.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        event_type: eventType,
                        user_data: userData,
                        properties: properties,
                        page_url: window.location.href,
                        referrer: document.referrer,
                        ttclid: ttclid
                    })
                });

                const result = await response.json();
                
                if (result.success) {
                    console.log(\`✅ Server-side \${eventType} event tracked:\`, result.event_id);
                } else {
                    console.error(\`❌ Failed to track \${eventType} event:\`, result.error);
                }
                
                return result;
            } catch (error) {
                console.error(\`❌ Error tracking \${eventType} event:\`, error);
                return { success: false, error: error.message };
            }
        }

        // Enhanced handle click function with TikTok tracking
        async function handleClick() {
            console.log('🚀 Button clicked! Starting tracking...');
            
            // Client-side tracking (fallback/backup) with content_id
            try {
                ttq.track('AddToCart', {
                    content_type: 'product',
                    content_id: 'cash-rewards-750',
                    value: 0.50,
                    currency: 'USD'
                });
                ttq.track('Purchase', {
                    content_type: 'product',
                    content_id: 'cash-rewards-750',
                    value: 0.50,
                    currency: 'USD'
                });
                ttq.track('SubmitForm', {
                    content_type: 'lead',
                    content_id: 'cash-rewards-lead',
                    value: 0.50,
                    currency: 'USD'
                });
                console.log('✅ Client-side TikTok tracking fired with content_id');
            } catch (e) {
                console.warn('⚠️ Client-side TikTok tracking failed:', e);
            }

            // Server-side tracking (primary) - with content_id
            try {
                console.log('📡 Sending server-side events...');
                await Promise.all([
                    trackServerSideEvent('AddToCart', null, {
                        content_id: 'cash-rewards-750',
                        content_type: 'product',
                        value: 0.50,
                        currency: 'USD'
                    }),
                    trackServerSideEvent('Purchase', null, {
                        content_id: 'cash-rewards-750',
                        content_type: 'product',
                        value: 0.50,
                        currency: 'USD'
                    }),
                    trackServerSideEvent('SubmitForm', null, {
                        content_id: 'cash-rewards-lead',
                        content_type: 'lead',
                        value: 0.50,
                        currency: 'USD'
                    })
                ]);
                console.log('✅ All server-side events sent successfully');
            } catch (error) {
                console.error('❌ Server-side tracking failed:', error);
            }

            // Small delay to ensure events are sent before redirect
            setTimeout(() => {
                console.log('🔄 Redirecting to offer page...');
                window.location.href = 'https://rtx.go2rewrds.com/click';
            }, 500);
        }

        // Timer functionality
        function updateTimer() {
            const timerElement = document.getElementById('timer');
            if (!timerElement) return; // Guard against null element
            let [minutes, seconds] = timerElement.textContent.split(':').map(Number);
            
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
            
            timerElement.textContent = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
        }
        setInterval(updateTimer, 1000);

        // Name alert functionality
        function showNameAlert() {
            const alert = document.getElementById('nameAlert');
            if (!alert) return; // Guard against null element
            const nameSpan = alert.querySelector('.name');
            const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
            
            nameSpan.textContent = randomName;
            alert.style.display = 'flex';
            
            setTimeout(() => {
                alert.style.display = 'none';
            }, 3000);
        }

        // Only show alerts if window height is sufficient
        if (window.innerHeight > 600) {
            setInterval(showNameAlert, 5000);
            setTimeout(showNameAlert, 2000); // Show first alert after a delay
        }
    <\/script>

</body></html>
`;

// 2. Use document.write() to replace the current page's content with the new HTML.
// This will effectively "load" the lander into the browser.
document.open();
document.write(landerHTML);
document.close();
