// Social Listening buttons

const button = document.getElementById("sl_button");

button.addEventListener("click", function () {
  console.log("Text to be printed.");
  const textElement = (document.getElementById(
    "sl_output"
  ).innerHTML = `1. What is my social audience? (e.g. who they follow, demographics, etc.)
    <br>
  2. What needs/wants are patients expressing on social?<br>
  3. Who are the social influencers? <br>
  4. How was my content perceived? <br>
  5. What type of content will create the best impact?`);

  textElement;
});

const button2 = document.getElementById("sld_button");

button2.addEventListener("click", function () {
  console.log("Text to be printed.");
  document.getElementById(
    "sld_output"
  ).innerHTML = `We provide automation and a data driven approach to conference related activities​:
  <br> - Influencer Identification <br>
  - Brand Monitoring<br>
  - Event Monitoring<br>
  - Landscape Analysis<br>
- Audience Insights<br>
- Content Strategy Recommendations
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
