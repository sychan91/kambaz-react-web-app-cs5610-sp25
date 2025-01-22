export default function AssignmentEditor() {
    return (
        <div id='wd-assignment-editor'>
            <label htmlFor='wd-name'><b>Assignment Name</b></label><br/>
            <input id='wd-name' value='A1 - ENV + HTML'/><br/><br/>
            <textarea id='wd-description' style={{ width: '100%' }} rows={10} cols={30}>
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
                    <label htmlFor='wd-points'>Points </label>
                </td>
                <td>
                    <input type='wd-points' value={100}/>
                </td>
            </tr>
            <br/>
            <tr>
                <td align='right' valign='top'>
                    <label htmlFor='wd-group'>Assignment Group </label>
                </td>
                <td>
                    <select name='wd-group'>
                        <option value='ASSIGNMENTS'>ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>
            <br/>
            <tr>
                <td align='right' valign='top'>
                    <label htmlFor='wd-display-grade-as'>Display Grade as </label>
                </td>
                <td>
                    <select name='wd-display-grade-as'>
                        <option value='PERCENTAGE'>Percentage</option>
                        <option value='RAWSCORE'>Raw Score</option>
                    </select>
                </td>
            </tr>
            <br/>
            <tr>
                <td align='right' valign='top'>
                    <label htmlFor='wd-submission-type'>Submission Type</label>
                </td>
                <td>
                    <select name='wd-submission-type'>
                        <option value='Online'>Online</option>
                    </select>
                </td>
            </tr>
            <br/>
            <tr>
            <br/>
                <td text-align='center' valign='middle'>
                    <label htmlFor='wd-entry-options'>Online Entry Options</label>
                    <br/>
                    <input type='checkbox' name='check-option' id='wd-text-entry'/>
                    <label htmlFor='wd-text-entry'>Text Entry</label><br/>
                    <input type='checkbox' name='check-option' id='wd-website-url'/>
                    <label htmlFor='wd-website-url'>Website URL</label><br/>
                    <input type='checkbox' name='check-option' id='wd-media-recordings'/>
                    <label htmlFor='wd-media-recordings'>Media Recordings</label><br/>
                    <input type='checkbox' name='check-option' id='wd-student-annotation'/>
                    <label htmlFor='wd-student-annotation'>Student Annotation</label><br/>
                    <input type='checkbox' name='check-option' id='wd-file-upload'/>
                    <label htmlFor='wd-file-upload'>File Uploads</label><br/>
                </td>
            </tr>
            <br/>
            <tr>
                <br/>
                <td align='left'>
                    <label htmlFor='wd-assign-to'>Assign to</label>
                </td>
            </tr>
            <tr>
                <br/>
                <td align='left' valign='top'>
                    <input type='wd-assign-to' placeholder='Everyone'/>
                </td>
            </tr>
            <br/>
            <tr>
                <br/>
                <td align='left' valign='top'>
                    <label htmlFor='wd-due-date'>Due</label>
                    <br/>
                    <input type='date' value='01-22-2025' id='wd-due-date'/>
                </td>
            </tr>
            <br/>
            <tr>
                <br/>
                <td align='left' valign='top'>
                    <label htmlFor='wd-available-from'>Available from</label>
                    <br/>
                    <input type='date' value='01-06-2025' id='wd-available-from'/>
                </td>
                <td>
                    <label htmlFor='wd-available-until'>Until</label>
                    <br/>
                    <input type='date' value='01-22-2025' id='wd-available-until'/>
                </td>
            </tr>
           </table>
           <hr/>
           <div style={{textAlign: 'right'}}>
                <button id='wd-cancel-btn' style={{marginRight: '3px'}}>Cancel</button>
                <button id='wd-save-btn' style={{backgroundColor: 'red', color: 'white'}}>Save</button>
            </div>
        </div>
    );
}