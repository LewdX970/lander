
  function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  function getSlugFromPath() {
    const path = window.location.pathname;
    const slug = path.replace(/^\/+|\/+$/g, '');
    return slug || '';
  }

  (function ensureTTCLIDParamOnLander() {
    try {
      const u = new URL(window.location.href);
      if (!u.searchParams.has('ttclid')) {
        u.searchParams.set('ttclid', '');
        history.replaceState(null, '', u.toString());
        console.log('Ensured ttclid param on lander URL');
      }
    } catch(e) { console.log('ttclid lander ensure error', e); }
  })();
  
  let s = getURLParameter('s');
  const o = getURLParameter('o') || 'cash';
  const slug = getSlugFromPath();
  const ttclid = getURLParameter('ttclid');
  
  let campaignUrl;
  let sourceValue = s;
  let forceEmptySource = false;
  let isSpecialCase = false;
  
  console.log('Checking offer:', o.toLowerCase(), 'source:', s);
  
  // [All your existing if/else conditions remain the same]
  if (o.toLowerCase() === 'applefl' && s === 'Choley') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/98b200e2-c923-4f06-aafb-11d608d69d9d';
    sourceValue = 'Choley';
    forceEmptySource = true;
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'applefl' && s === 'TunTunSahur') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b33e1b9d-d829-4554-9f0c-aeaba18f1ef6';
    sourceValue = 'fries';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'playfulfl' && s === 'hairyniggas') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 'Gudigudi';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'playfulfl' && s === 'test1') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 't2';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'sheinfl' && s === 'JohnySins') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 'Choley';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'playfulfl' && s === 'toshibaM7') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 'Dharampal';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'cashfl' && s === 'Calendar') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/76a5ff11-9966-4ac0-94c0-e21a961c5ea4';
    sourceValue = '4';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'applefl' && s === 'Calendar') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b33e1b9d-d829-4554-9f0c-aeaba18f1ef6';
    sourceValue = '2';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'playfulfl' && s === 'syringe') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b33e1b9d-d829-4554-9f0c-aeaba18f1ef6';
    sourceValue = 'dharampal';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'testerupfl' && s === 'gohanaa') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 'gohanaa';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'playfulfl' && s === 'cessy0012') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
    sourceValue = 'cessy01';
    isSpecialCase = true;
  }
  else if (o.toLowerCase() === 'cashfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/76a5ff11-9966-4ac0-94c0-e21a961c5ea4';
  }
  else if (o.toLowerCase() === 'playfulfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/decf0555-c11a-4184-8779-d698dfd94799';
  }
  else if (o.toLowerCase() === 'mvshein') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/9ec148f2-0ea9-430d-9c1d-c19d2a7a4cc4';
  }
  else if (o.toLowerCase() === 'mvapple') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/1acb22f6-d72d-4a3f-9508-6e18aec9bed7';
  }
  else if (o.toLowerCase() === 'mvcash') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/4df043cb-f345-4f4c-af6f-39edbd46e65f';
  }
  else if (o.toLowerCase() === 'mvamazon') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/2a83174f-debc-4cd1-a416-65f24ead18eb';
  }
  else if (o.toLowerCase() === 'mvplayful') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/ee21678f-f442-4cb1-90aa-290e5dfff0d6';
  }
  else if (o.toLowerCase() === 'mvtesterup') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b58c3357-42c7-4042-bc75-10682751ef0a';
  }
  else if (o.toLowerCase() === 'teststar') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/f1db15e2-e82f-485f-a5d4-68aa4cf5e0ca';
  }
  else if (o.toLowerCase() === 'aryancash') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/e3f9226d-c87d-46e4-a9c8-08a442adcc47';
  }
  else if (o.toLowerCase() === 'aryanplayful') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/4ed9443c-0697-4fbd-ae0a-1ae2a6bcb50a';
  }
  else if (o.toLowerCase() === 'aryantesterup') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/ab6acfea-59df-4125-9cd7-2a1152daa0b3';
  }
  else if (o.toLowerCase() === 'aryanapple') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b2211abd-4e70-401b-94d2-dcdfc1f9ef9d';
  }
  else if (o.toLowerCase() === 'testerupgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/ffcbd367-fe89-47d0-92f4-b8846ddcfa10';
  }
  else if (o.toLowerCase() === 'testerupfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/ad99609f-ada0-4f75-aa12-8348fc617c02';
  }
  else if (o.toLowerCase() === 'wellsfargofl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/28dd49ec-870f-4fab-8e3a-731a173c0f0e';
  }
   else if (o.toLowerCase() === 'wellsfargogl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/28dd49ec-870f-4fab-8e3a-731a173c0f0e';
  }
  else if (o.toLowerCase() === 'sheinfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/1911d8cd-105f-4ffa-8472-ffad99655b69';
  }
  else if (o.toLowerCase() === 'doordashfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/aec67d8d-43aa-4bbc-997d-5eafcdefc98e';
  }
  else if (o.toLowerCase() === 'autofl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/1eb92692-2f2c-4967-86ff-b2011a617718';
  }
  else if (o.toLowerCase() === 'autogl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/1eb92692-2f2c-4967-86ff-b2011a617718';
  }
  else if (o.toLowerCase() === 'pltfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/2328d18b-25db-4fc3-a98f-9e10d7bc3bfd';
  }
  else if (o.toLowerCase() === 'pltgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/8ce8658e-9a62-4019-bd3c-8d71a8b88fd3';
  }
  else if (o.toLowerCase() === 'swagbucksfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/12cfefed-af09-4007-bc68-fd198b65ba97';
  }
  else if (o.toLowerCase() === 'swagbucksgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/a35c01fb-ef70-4b49-ad0f-74cfec1dbae3';
  }
  else if (o.toLowerCase() === 'venmofl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/ad067dcd-195c-4c47-b997-b4221c4c0660';
  }
  else if (o.toLowerCase() === 'coinbasefl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/8695e68f-4638-41fc-bceb-841ebb0b4942';
  }
  else if (o.toLowerCase() === 'coinbasegl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b41b7041-8222-4733-9911-c5931b85c75b';
  }
  else if (o.toLowerCase() === 'applefl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b33e1b9d-d829-4554-9f0c-aeaba18f1ef6';
  }
  else if (o.toLowerCase() === 'zarafl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/55a24fc4-95f2-44fe-8420-b74628afad4c';
  }
  else if (o.toLowerCase() === 'zaragl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/2a097cd0-ce28-4b4f-b19c-903e1aa43487';
  }
  else if (o.toLowerCase() === 'applegl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/98b200e2-c923-4f06-aafb-11d608d69d9d';
  }
  else if (o.toLowerCase() === 'zellefl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/bd6fd5a0-6645-49ff-8858-4fb6dd970d5c';
  }
  else if (o.toLowerCase() === 'zellegl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/5d02bd2a-f3fb-428f-89ee-733c6d575e44';
  }
  else if (o.toLowerCase() === 'aritziafl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/77e0171c-693e-4a44-a452-7394b30dc12e';
  }
  else if (o.toLowerCase() === 'doordashgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/f531ff2b-1eb9-44c9-a8b8-f78a25d7ced3';
  }
  else if (o.toLowerCase() === 'amzfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/3e09b608-f883-4486-9554-6adf801d69a8';
  }
  else if (o.toLowerCase() === 'ttsfl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/b655d9c9-bb71-4e2d-b516-ab90f41ab344';
  }
  else if (o.toLowerCase() === 'venmogl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/1c90beae-7f14-4db5-a508-7ef9d77552d0';
  }
  else if (o.toLowerCase() === 'playfulgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/17ea1f79-b2fa-4e3a-8fe8-64f17757da71';
  }
  else if (o.toLowerCase() === 'aritziagl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/2d063da5-a076-46b9-a1ef-93636fb1a408';
  }
  else if (o.toLowerCase() === 'sheingl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/2c89efec-0cce-4461-a060-77955f40f9a9';
  }
  else if (o.toLowerCase() === 'amzgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/248a592d-20d2-4684-8f7f-1466bd0e82d7';
  }
  else if (o.toLowerCase() === 'ttsgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/e71fbf31-cf60-4f1e-a7ab-8dc5652aefb5';
  }
  else if (o.toLowerCase() === 'cashgl') {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/53fe1a55-8406-4111-aa57-8b8f7733a383';
  }
  else {
    campaignUrl = 'https://rtx.go2rewrds.com/visit/76a5ff11-9966-4ac0-94c0-e21a961c5ea4'; 
  }
  
  console.log('Final campaignUrl:', campaignUrl);
  console.log('Final sourceValue:', sourceValue);
  console.log('forceEmptySource:', forceEmptySource);
  
  const isMobile = window.innerWidth <= 768 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (isMobile && campaignUrl) {
    const finalURL = new URL(campaignUrl);
    
    if (forceEmptySource) {
      finalURL.searchParams.set('s1', '');
      console.log('Adding empty s1');
    } else if (sourceValue) {
      finalURL.searchParams.set('s1', sourceValue);
      console.log('Adding s1:', sourceValue);
    }
    
    if (slug) {
      finalURL.searchParams.set('s2', slug);
      console.log('Adding s2:', slug);
    }

    const ttclidVal = (ttclid !== null) ? ttclid : '';
    finalURL.searchParams.set('ttclid', ttclidVal);
    finalURL.searchParams.set('ct3', ttclidVal);
    console.log('Adding ttclid/ct3:', ttclidVal);
    
    // ===== LIVE TRACKING - SEND CLICK TO RAILWAY =====
    // ===== LIVE TRACKING - SEND CLICK TO RAILWAY =====
try {
  navigator.sendBeacon(
    'https://gorewrds.com/maxconv/click',
    JSON.stringify({
      offer: o,
      source: sourceValue || s || 'Direct',
      subid: slug,
      country: 'Unknown'
    })
  );
} catch(e) {
  fetch('https://gorewrds.com/maxconv/click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      offer: o,
      source: sourceValue || s || 'Direct',
      subid: slug,
      country: 'Unknown'
    }),
    keepalive: true
  }).catch(err => console.log('Track:', err));
}
// ===== END LIVE TRACKING =====
    // ===== END LIVE TRACKING =====
    
    console.log('Redirecting to:', finalURL.toString());
    window.location.href = finalURL.toString();
  } else {
    console.log('Not mobile or no campaign URL');
  }
