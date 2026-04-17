const fs = require("fs");

const tokens = ["USOR", "NEURIX", "MEMEX"];

tokens.forEach(token => {
  const content = `
<!DOCTYPE html>
<html>
<body style="background:black;color:white;font-family:sans-serif;padding:20px;">
<h1>${token} - Trending Token</h1>
<p>${token} is gaining attention in the crypto market.</p>
<a href="../index.html">Back</a>
</body>
</html>
`;

  fs.writeFileSync(`articles/${token.toLowerCase()}.html`, content);
});
