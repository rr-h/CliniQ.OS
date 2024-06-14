#!/bin/bash

# Create the project root directory
mkdir -p project-root

# Create subdirectories
mkdir -p project-root/css
mkdir -p project-root/js
mkdir -p project-root/images
mkdir -p project-root/fonts

# Move CSS files to the css directory
mv styles/sergiodiazschiaffino.min.css project-root/css/
mv styles.css project-root/css/

# Move JavaScript files to the js directory
mv additional-methods.min.js project-root/js/
mv fonts/webfont.js project-root/js/
mv jquery-3.5.1.min.dc5e7f18c8.js project-root/js/jquery.min.js
mv jquery.min.js project-root/js/
mv jquery.validate.min.js project-root/js/
mv js\?id\=G-E5B3WC78SV.js project-root/js/gtag.js
mv selectcustom.js project-root/js/
mv sergiodiazschiaffino.1238f5a1a.js project-root/js/scripts.js
mv widget.js project-root/js/

# Move image files to the images directory
mv img/* project-root/images/
mv icons/* project-root/images/
mv click.85a86439.svg project-root/images/
mv cursor.7a94a6c4.svg project-root/images/
mv grabber.fc5d176b.svg project-root/images/
mv grabber-white.ff942675.svg project-root/images/
mv grab.c56ea2e1.svg project-root/images/
mv insert.56696d34.svg project-root/images/
mv resize.b89611b9.svg project-root/images/
mv Sin-ti_CC_81tulo-1.png project-root/images/
mv Mouse_Click_4-fesliyanstudios.com.mp3 project-root/images/
mv PVGidkWk0RDUyPBvIysX78xcvfvNnFON.mp3 project-root/images/
mv 637fe1f84b89d9fa813754a0_Network\ browser.svg project-root/images/
mv 637fe1f84b89d9fda2375480_Adobe\ Photoshop\ 5.0.svg project-root/images/
mv 63e4f5ac0f3b5ceda522bd44_State\=Default,\ Position\=Left.svg project-root/images/
mv 63e4f5b259f280455c484c84_State\=Default,\ Position\=Right.svg project-root/images/
mv 63e4f5c0eb794446a7a29223_State\=Default,\ Position\=Up.svg project-root/images/
mv 63e4f5c68738ce80dbcc07a4_State\=Default,\ Position\=Down.svg project-root/images/
mv 63e4f6aef1ed0f25e9d77aa0_utilities--help.svg project-root/images/
mv 63e60b97402bdb63b53cc56d_giphy\ \(3\).gif project-root/images/
mv 63e6138fccb1101140768f1f_giphy\ \(5\).gif project-root/images/
mv 63ff6d304fd06cedbafe8dbe_962632C1-2EE5-4A31-AE65-E2CB5F3C98CE\ 2\ \(1\).jpg project-root/images/
mv 63ff6d304fd06cedbafe8dbe_962632C1-2EE5-4A31-AE65-E2CB5F3C98CE\ 2\ \(1\)-p-500.jpg project-root/images/

# Move font files to the fonts directory
mv fonts/* project-root/fonts/

# Move the HTML file to the project root directory
mv index.html project-root/

# Handle additional files
mv Mouse_Click_4-fesliyanstudios.com.mp3 project-root/
mv PVGidkWk0RDUyPBvIysX78xcvfvNnFON.mp3 project-root/

echo "Project reorganization complete."
