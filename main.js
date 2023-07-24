// Social Listening buttons

const button = document.getElementById("sl_button");

button.addEventListener("click", function () {
  const textElement = (document.getElementById(
    "sl_output"
  ).innerHTML = `1. What is my social audience? (e.g. who they follow, demographics, etc.)
    <br>
  2. What needs/wants are patients expressing on social?<br>
  3. Who are the social influencers? <br>
  4. How was my content perceived? <br>
  5. What type of content will create the best impact?`);

  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
});

const button2 = document.getElementById("sld_button");

button2.addEventListener("click", function () {
  document.getElementById(
    "sld_output"
  ).innerHTML = `We provide automation and a data driven approach to conference related activities​:
  <br><br> &#8226 Influencer Identification <br>
  &#8226 Brand Monitoring<br>
  &#8226 Event Monitoring<br>
  &#8226 Landscape Analysis<br>
  &#8226 Audience Insights<br>
  &#8226 Content Strategy Recommendations
    <br>`;
});

// HCP buttons

const button_hcp = document.getElementById("hcp_button");

button_hcp.addEventListener("click", function () {
  document.getElementById(
    "hcp_output"
  ).innerHTML = `1. Who are the most influential and/or rising star HCP's?
    <br>
  2. What are the qualifications or identified individuals?<br>
  3. Who is the right fir for a particular type of engagement? <br>
`;
});

const button_hcpd = document.getElementById("hcpd_button");

button_hcpd.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "hcpd_output"
  ).innerHTML = `Enabling identification of the right experts for the right engagemnets at the right time​.<br>
  <br> <strong>Based on...</strong><br> - Medical Publication Authorship <br>
  - Conference Abstract Authorship<br>
  - Co-Authorship Newtworks<br>
  - Clinical Trial Investigations<br>
- Open Payments<br>
- Committee Memberships<br>
- Client Data Sources
    <br>
    <br> <strong>We determine...</strong>
    <br> - Top KOLs<br>
    - Rising star KOLs <br>
    - Recommendations for engagement fit`;
});

// Lexicon Analysis buttons

const button_lex = document.getElementById("lex_button");

button_lex.addEventListener("click", function () {
  document.getElementById(
    "lex_output"
  ).innerHTML = `1. How is language changing over time?<br>
  2. What language is used in various contexts?<br>
  3. How can my client differentiate themselves through use of language?<br>
`;
});

const button_lexd = document.getElementById("lexd_button");

button_lexd.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "lexd_output"
  ).innerHTML = `Analyzing industry language and identifying affective, consistent and differentiated strategies for clients.
<br><br>
  <strong>Understanding of industry voices:</strong><br>
  We help the client understand what lexicon is being used across the industry, by competitors, the media, key opinion leaders, patients etc.
  <br><br>
  <strong>Creating a differentiated, consistent and credible voice:</strong><br>
  We help shape the client's voice within the industry to drive standards for the creation of strong materials such as: Scientific Messaging, Press Releases, Publications etc.
  <br><br>
  <strong>Discover industry trends:</strong><br>
  We help provide insights into what is trending in the industry for the clients disease space, what topics are hot or cold and how the conversation is changing over time.`;
});

// Event Monitoring buttons

const button_event = document.getElementById("event_button");

button_event.addEventListener("click", function () {
  document.getElementById(
    "event_output"
  ).innerHTML = `1. What topics are going to be covered at a conference?<br>
  2. What content will occur at a conference that is similar to my content?<br>
  3. What content exists regarding a product or company?<br>
  4. What content exists for a disease space across conferences?<br>
  5. How is conference content changing over time?<br>
`;
});

const button_eventd = document.getElementById("eventd_button");

button_eventd.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById("eventd_output").innerHTML = `
  We provide automation and a data driven approach to conference related activities.
  <br>
  <ul>&#8226  Conference Grid Support</ul>
  <ul>&#8226 Product/Company Conference Profiles</ul>
  <ul>&#8226 Landscape Analyses</ul>
  <ul>&#8226 Social Insights</ul>`;
});

// Literature Review buttons

const button_lit = document.getElementById("lit_button");

button_lit.addEventListener("click", function () {
  document.getElementById(
    "lit_output"
  ).innerHTML = `1. What content has been published relevant to my clients disease space?<br>
  2. What are the core topics and key takeaways across published content? <br>
`;
});

const button_litd = document.getElementById("litd_button");

button_litd.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "litd_output"
  ).innerHTML = `We provide automated services for curating the latest published content within a disease space.
<br><br>
  This includes the ability to flag results for important factors such as mentions of competitor product names.`;
});

// General D&A Services buttons

const button_data = document.getElementById("data_button");

button_data.addEventListener("click", function () {
  document.getElementById(
    "data_output"
  ).innerHTML = `1. In a body or text, what emotions are being conveyed?<br>
  2. How can we best design surveys to gain insights from the responses?<br>
  3. How can we pull text from competitor, conference and other websites that have relevant content for us?<br>
  4. How can we get a text output of the content of an audio or video recording?<br>
  5. How can we better explore information that we already have, to drive insights?<br>
  6. How can we leverage ChatGPT to create better efficiencies?<br>
`;
});

const button_datad = document.getElementById("datad_button");

button_datad.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "datad_output"
  ).innerHTML = `There are many ways that Data & Analytics can support our day-to-day operations, below are a few examples:
<br><br>
&#8226 Sentiment Analysis<br>
&#8226 Survey Design & Results Analysis<br>
&#8226 Web Scraping<br>
&#8226 Video/Audio to Text Transcription<br>
&#8226 Dashboarding/Reporting<br>
&#8226 ChatGPT Support`;
});
