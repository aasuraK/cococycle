OPTIONAL: collect real submissions from ALL visitors into a Google Sheet (free; the Sheet downloads as Excel).

1. Go to sheets.new and create a Sheet named "CocoCycle Inquiries".
2. In the Sheet: Extensions > Apps Script. Delete the sample code and paste in Code.gs from this folder. Save.
3. Click Deploy > New deployment > type "Web app".
   - Execute as: Me
   - Who has access: Anyone
   Click Deploy and approve the permissions. Copy the Web app URL.
4. Open app.js and set:  sheetsUrl: 'PASTE_THE_URL_HERE'
5. Re-upload the site. Submissions now appear as new rows in the Sheet.
   To get Excel: File > Download > Microsoft Excel (.xlsx).

Note: anyone who finds the URL could post rows to your Sheet. Fine for a demo; add spam protection for a real launch.
