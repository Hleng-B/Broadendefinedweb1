// Run this in your browser console on your Google Form page
// to automatically extract the entry IDs

function findFormEntryIds() {
  console.log("🔍 Searching for Google Form entry IDs...\n");
  
  // Get all input elements
  const inputs = document.querySelectorAll('input[name^="entry."], textarea[name^="entry."], select[name^="entry."]');
  
  if (inputs.length === 0) {
    console.log("❌ No entry fields found. Make sure you're on the Google Form page.");
    return;
  }
  
  console.log("✅ Found entry IDs:\n");
  
  inputs.forEach((input, index) => {
    const entryId = input.name;
    const label = input.closest('.Qr7Oae')?.querySelector('.M7eMe')?.textContent || 
                  input.closest('.geS5n')?.querySelector('.M7eMe')?.textContent ||
                  input.getAttribute('aria-label') ||
                  `Field ${index + 1}`;
    
    console.log(`${label}: ${entryId}`);
  });
  
  console.log("\n📋 Copy these IDs to your React component!");
}

// Auto-run the function
findFormEntryIds();