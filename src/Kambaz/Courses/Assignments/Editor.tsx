export default function AssignmentEditor() {
    return (
        <div id='wd-assignment-editor'>
            <label htmlFor='wd-name'><b>Assignment Name</b></label><br/>
            <input id='wd-name' value='A1 - ENV + HTML'/><br/><br/>
            <textarea id='wd-description' style={{ width: '150%' }} rows={10} cols={30}>
                The assignment is available online. Submit a link to the landing page of your Web
                application running on Netlify. The landing page should include the following:
                Your full name and section Links to each of the lab assignments Link to the Kambaz
                application Links to all relevant source code repositories The Kambaz application
                should include a link to navigate back to the landing page.
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-points'>Points</label>
                    </td>
                    <td>
                        <input id='wd-points' value={100}/>
                    </td>
                </tr>
            </table>
            <br/>
            <table>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-group'>Assignment Group</label>
                        <select id='wd-group'>
                            <option value='ASSIGNMENTS'>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
            </table>
            <br/>
            <table>
                <td align='right' valign='top'>
                    <label htmlFor='wd-display-grade-as'>Display Grade as</label>
                    <select id='display-grade-as'>
                        <option>Percentage</option>
                        <option>Raw Score</option>
                    </select>
                </td>
            </table>
            <br/>
            <table>
                <td align='right' valign='top'>
                    <label htmlFor='wd-submission-type'>Submission Type</label>
                    <select id='wd-submission-type'>
                        <option>Online</option>
                    </select>
                </td>
            </table>
            <br/>
            <label htmlFor='wd-wd-entry-options'>Online Entry Options:</label><br/>
            <input type='checkbox' name='check-option' id='wd-text-entry'/>
            <label htmlFor='wd-text-entry'>Text Entry</label><br/>
            <input type='checkbox' name='check-option' id='wd-website-url'/>
            <label htmlFor='wd-website-url'>Website URL</label><br/>
            <input type='checkbox' name='check-option' id='wd-media-recordings'/>
            <label htmlFor='wd-media-recordings'>Media Recordings</label><br/>
            <input type='checkbox' name='check-option' id='wd-student-annotation'/>
            <label htmlFor='wd-student-annotation'>Student Annotation</label><br/>
            <input type='checkbox' name='check-option' id='wd-file-upload'/>
            <label htmlFor='wd-file-upload'>File Upload</label><br/>
            <br/>
            <label htmlFor='wd-assign-to'>Assign to</label><br/>
            <input placeholder='Everyone' id='wd-assign-to' />
            <br/><br/>
            <label htmlFor='wd-due-date'>Due</label><br/>
            <input type='date' id='wd-due-date' value='2025-01-22'/>
            <br/><br/>
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <label htmlFor="wd-available-from">Available from</label>
                    <input type="date" id="wd-available-from" value="2025-01-03" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <label htmlFor="wd-available-until">Until</label>
                    <input type="date" id="wd-available-until" value="2025-01-22" />
                </div>
            </div><hr style={{ width:'150%'}}/>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '3px', width: '150%' }}>
                <button id='wd-cancel-btn'>Cancel</button>
                <button id='wd-save-btn' style={{backgroundColor: 'red', color: 'white'}}>Save</button>
            </div>
        </div>
    );
}