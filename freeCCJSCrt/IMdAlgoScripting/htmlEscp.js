// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let htmlEnts = []
    for(let i = 0; i < str.length; i++){
      let ht_ent = str[i];
      let nonHtml = /\w/i;
      switch (true) {
        case nonHtml.test(ht_ent):
          htmlEnts.push(ht_ent);
          break;
        case ht_ent == '&':
          htmlEnts.push('&amp;');
          break;
        case /\s/.test(ht_ent):
          htmlEnts.push(ht_ent);
          break;
        case ht_ent == '<':
          htmlEnts.push('&lt;');
          break;
        case ht_ent == '>':
          htmlEnts.push('&gt;');
          break;
        case ht_ent == '"':
          htmlEnts.push('&quot;');
          break;
        case ht_ent == "'":
          htmlEnts.push('&apos;');
          break
        
      }
    }
    return htmlEnts.join("");
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));

// Dolce &amp; Gabbana
// Hamburgers &lt; Pizza &lt; Tacos
// Sixty &gt; twelve
// Stuff in &quot;quotation marks&quot;
// Schindler&apos;s List