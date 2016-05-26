const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		height: '400px',
		background: "url(images/header-background.png) repeat-x",
		zIndex: "2",

		':before': {
	        content: '" "',
	    }
	},
	mainLogoContainer: {
		margin: "0px auto",
		maxWidth: "960px",
		background: "url(images/header-logo.png) no-repeat center center",
		height: "320px"
	},
	lostGoblinLogo: {
		margin: "25px 5px 0px 5px",
		height: "51px"
	}
})

module.exports = {
	container: css( styles.container ),
	mainLogoContainer: css( styles.mainLogoContainer ),
	lostGoblinLogo: css( styles.lostGoblinLogo )
}