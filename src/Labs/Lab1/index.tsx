export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and
                subsections. Each section is usually prefaced with a short
                title or heading that attempts to summarize the topic of the
                section it precedes. For instance this paragraph is preceded by
                the heading Heading Tags. The font of the section headings are
                usually larger and bolder than their subsection headings. This
                document uses headings to introduce topics such as HTML
                Documents, HTML Tags, Heading Tags, etc. HTML heading tags can
                be used to format plain text so that it renders in a browser as
                large headings. There are 6 heading tags for different sizes:
                h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and
                h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is a paragraph. We often separate a long set
                    of sentences with vertical spaces to make the text
                    easier to read. Browsers ignore vertical white
                    spaces and render all the text as one single set
                    of sentences. To force the browser to add vertical
                    spacing, wrap the paragraphs you want to separate
                    with the paragraph tag
                </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between
                    long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white gap between the
                    paragraph above and this paragraph, by default browsers render them as one contiguous
                    piece of text as shown here on the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers
                    to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                How to make cup noodles:
                <ol id="wd-cup-noodle-reciple">
                    <li>Boil hot water.</li>
                    <li>Open cup noodle lid.</li>
                    <li>Open and empty vegetable and seasoning packet into the cup.</li>
                    <li>Pour hot water into the cup until the fill line.</li>
                    <li>Close the lid and wait 3 minutes.</li>
                    <li>Open lid, stir and enjoy!</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                My Favorite Books (in no particular order)
                <ul id="wd-my-books-2">
                    <li>Harry Potter and the Sorcerer's Stone</li>
                    <li>To Kill a Mockingbird</li>
                    <li>Animal Farm</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>1/21/25</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>1/28/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>CSS</td>
                            <td>2/4/25</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JavaScript</td>
                            <td>2/11/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>JavaScript</td>
                            <td>2/18/25</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Redux</td>
                            <td>3/11/25</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Redux</td>
                            <td>3/18/25</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Node</td>
                            <td>3/25/25</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Node</td>
                            <td>4/1/25</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Mongo</td>
                            <td>4/8/25</td>
                            <td>95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>92.3</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}