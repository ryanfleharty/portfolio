$(document).ready(function(){
    var page_choice = ""
    $('.menu').on('click', 'button', function(){
        $('.button-primary').removeClass('button-primary')
        $(this).addClass('button-primary')
    })
    $('#about').click(function(){
        $('.content').html('<div class="row">\
            <div class="four columns about_div">\
                <h4>Biography</h4>\
                <p>I\'m a 28 year old human with 8 years experience teaching college English classes.</p>\
                <p>Now I\'m taking my talents to the internet as a web developer!</p>\
                <a href="ryan_fleharty_resume.docx" download><button>Download Resume</button></a>\
            </div>\
            <div class="four columns about_div">\
                <h4>Technical Skills</h4>\
                <p>Front-end: Angular.js, Bootstrap, Skeleton, Photoshop, HTML/CSS</p>\
                <p>Back-end: Node.js, Express, Django, MongoDB, MYSQL, PostgresSQL</p>\
                <p>Languages: Javascript, Python</p>\
            </div>\
            <div class="four columns about_div">\
                <h4>Soft Skills</h4>\
                <p>As an experienced Communications instructor, I can facilitate clear communication among group members.</p>\
                <p>I coordinate detail-oriented projects requiring synchronous activity as the leader of a folk rock band</p>\
            </div>\
        </div>'
        )
    })
    $('#projects').click(function(){
        $('.content').html('<div class="row">\
            <div class="project six columns">\
                <a href="/comics"><h4>Comic Subscribers App</h4></a>\
                <p>Created for Chimera\'s Comics in Chicago, allowing customers to manage subscriptions and discuss comic series.</p>\
                <div class="row">\
                <div class="six columns">\
                <h5>Features</h5>\
                <ul>\
                    <li>Robust user management, including social media authentication.</li>\
                    <li>Search, browse, and review ongoing series, including individual issues of each series.</li>\
                    <li>One-click import of new monthly comics drawn from distributer\'s database.</li>\
                </ul>\
                </div>\
                <div class="six columns">\
                <h5>Tech Specs</h5>\
                <ul>\
                    <li>Full-stack Django application</li>\
                    <li>jQuery expansion of review and comment forms</li>\
                    <li>Use of tinify API to compress cover art</li>\
                    <li><a href="https://github.com/ryanfleharty/subscription_app">Github Source Code</a></li>\
                </ul>\
                </div>\
                </div>\
            </div>\
            <div class="project six columns">\
                <a href="/countdown"><h4>Countdown Letters Challenge</h4></a>\
                <p>A simple letter game based on the British show Countdown</p>\
                <div class="row">\
                <div class="six columns">\
                <h5>Features</h5>\
                <ul>\
                    <li>Keyboard shortcuts to easily add/remove letters.</li>\
                    <li>Accurate gameplay allows the player to write down several words, but ultimately only choose one.</li>\
                    <li>Finds the best words available to compare against the player\'s answers</li>\
                </ul>\
                </div>\
                <div class="six columns">\
                <h5>Tech Specs</h5>\
                <ul>\
                    <li>jQuery, jQuery, and MORE jQuery!</li>\
                    <li>Lightweight Express server runs requests for word validation and best words</li>\
                    <li>Recursive best word algorithm traverses a node-based search tree constructed from the dictionary</li>\
                    <li><a href="https://github.com/ryanfleharty/countdown">Github Source Code</a></li>\
                </ul>\
                </div>\
                </div>\
            </div>\
        </div>')
    })
})
