const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		height: '120px',
		zIndex: "2",
		background: "url(images/footer-background.png) repeat-x bottom left",
		marginTop: "50px",
		fontFamily: '"Roboto"',

		':before': {
	        content: '" "',
	    }
	},
	footerContent: {
		margin: "0px auto",
		maxWidth: "1200px",
		position: "relative",
	},
	disclaimer: {
		padding: "50px 40px 0px",
		color: "#fff",
		fontSize: "18px",
	},
	socialMediaButtonBackground: {
		background: "url(images/social-media-background.png) no-repeat top left",
		position: "absolute",
		right: "0px",
		top: "10px",
		height: "90px",
		width: "488px",

		'@media (max-width: 1200px)': {
            display: "none"
        }
	},
	socialMediaButtonPosition: {
		position: "absolute",
		right: "50px",
		top: "-5px",

		'@media (max-width: 1200px)': {
            display: "none"
        }
	},
	fixedFooter: {
		position: "fixed",
		bottom: "0px",
		display: "none",
		width: "90%",
		height: "80px",

		'@media (max-width: 1200px)': {
            display: "block"
        },

        '@media (max-width: 550px)': {
        	width: "105%",
        }
	}
})

module.exports = {
	container: css( styles.container ),
	footerContent: css( styles.footerContent ),
	disclaimer: css( styles.disclaimer ),
	socialMediaButtonBackground: css( styles.socialMediaButtonBackground ),
	socialMediaButtonPosition: css( styles.socialMediaButtonPosition ),
	fixedFooter: css( styles.fixedFooter )
}