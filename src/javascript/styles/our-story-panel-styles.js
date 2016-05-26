const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: "300px",
		paddingTop: "60px",

		':before': {
	        content: '" "',
	    }
	},
	header: {
		background: "url(images/dev-blog-line.png) no-repeat center bottom",
		width: "100%",
		color: "#F68F21",
		height: "70px",
		margin: "0px auto",
		maxWidth: "1200px",
		fontFamily: '"Architects Daughter"',
	},
	ourStory: {
		display: "flex",
		flexDirection: "row",
		margin: "0px auto",
		maxWidth: "1200px",
	},
	ourStoryLogo: {
		flexGrow: "1",
		background: "url(images/header-background.png) repeat-x",
		height: "300px",
	},
	ourStoryLogoImage: {
		margin: "0px auto",
		height: "90%",
		display: "block"
	},
	ourStoryText: {
		flexGrow: "1",
		background: "#FFC40F",
		padding: "20px",
		boxSizing: "border-box",
	}
})

module.exports = {
	container: css( styles.container ),
	header: css( styles.header ),
	ourStory: css( styles.ourStory ),
	ourStoryLogo: css( styles.ourStoryLogo ),
	ourStoryText: css( styles.ourStoryText ),
	ourStoryLogoImage: css( styles.ourStoryLogoImage )
}