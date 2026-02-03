// Add this to your Google Apps Script to prevent duplicate entries
// This goes in your doPost function

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Check for duplicates based on submissionId first
    if (data.submissionId) {
      const existingData = sheet.getDataRange().getValues();
      
      // Check if this submissionId already exists
      for (let i = 1; i < existingData.length; i++) { // Skip header row
        const row = existingData[i];
        const existingSubmissionId = row[0]; // Assuming submissionId is in column A
        
        if (existingSubmissionId === data.submissionId) {
          console.log('Duplicate submission ID detected, skipping...', data.submissionId);
          return ContentService
            .createTextOutput(JSON.stringify({status: 'duplicate', message: 'Duplicate submission detected'}))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    // Also check for duplicates based on email and timestamp (within 5 minutes) as backup
    const existingData = sheet.getDataRange().getValues();
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    
    for (let i = 1; i < existingData.length; i++) { // Skip header row
      const row = existingData[i];
      const existingEmail = row[2]; // Assuming email is in column C (after submissionId and name)
      const existingTimestamp = new Date(row[row.length - 1]); // Assuming timestamp is last column
      
      if (existingEmail === data.email && existingTimestamp > fiveMinutesAgo) {
        console.log('Duplicate email submission detected within 5 minutes, skipping...');
        return ContentService
          .createTextOutput(JSON.stringify({status: 'duplicate', message: 'Recent submission detected'}))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // If no duplicate found, proceed with adding the data
    const platforms = Object.entries(data.platforms)
      .filter(([_, selected]) => selected)
      .map(([platform, _]) => platform)
      .join(', ');
    
    const socialLinks = Object.entries(data.socialLinks)
      .filter(([_, link]) => link && link.trim() !== '')
      .map(([platform, link]) => `${platform}: ${link}`)
      .join('\n');
    
    // Add row to sheet (including submissionId as first column)
    sheet.appendRow([
      data.submissionId || 'no-id',
      data.name,
      data.email,
      data.phone,
      data.business,
      platforms,
      socialLinks,
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success', message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}