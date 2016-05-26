const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: '800px',
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
	hero: {
		maxWidth: "1200px",
		position: "relative",
		background: "#BCB1A5 url(images/no-image.png) no-repeat center center",
		minHeight: "730px",
		margin: "0px auto",
		cursor: "pointer",
	},
	twoMore: {
		display: "flex",
		flexDirection: "row",
		margin: "0px auto",
		maxWidth: "1200px",
	},
	hero2: {
		background: "#AFA294 url(images/no-image.png) no-repeat center center",
		minHeight: "357px",
		flexGrow: "1",
		position: "relative",
		cursor: "pointer",
	},
	hero3: {
		background: "#9F9284 url(images/no-image.png) no-repeat center center",
		minHeight: "357px",
		flexGrow: "1",
		position: "relative",
		cursor: "pointer",
	},
	heroImage: {
		width: "100%",
		height: "100%",
	},
	subHeroImage: {
		width: "600px",
		height: "447px",
	},
	latestPostFeatureTile: {
		background: "url(images/hero-tile-text-background.png)",
		position: "absolute",
		bottom: "70px",
		width: "643px",
		height: "182px",
		color: "#fff",
		padding: "40px",
		boxSizing: "border-box",
		marginLeft: "-1px",
		fontFamily: "Arial",
	},
	latestPostTitle: {
		margin: "0px 0px 10px 0px"
	},
	seeMorePostsButton: {
		margin: "0px auto",
		maxWidth: "1200px",
		background: "#F68F21",
		color: "#fff", 
		outline: "none",
		border: "none",
		display: "block",
		width: "100%",
		padding: "15px",
		boxSizing: "border-box",
		fontSize: "18px",
		cursor: "pointer",

		":hover": {
			background: "#E2811F"
		}
	},
	subTitle: {
		height: "90px",
		width: "300px",
		background: "url(images/hero-tile-text-background.png)",
		backgroundSize: "100% 100%",
		color: "#fff",
		position: "absolute",
		bottom: "20px",
		fontSize: "24px",
		boxSizing: "border-box",
		padding: "20px",
		fontFamily: "Arial"
	}
})

module.exports = {
	container: css( styles.container ),
	header: css( styles.header ),
	hero: css( styles.hero ),
	latestPostFeatureTile: css( styles.latestPostFeatureTile ),
	latestPostTitle: css( styles.latestPostTitle ),
	twoMore: css( styles.twoMore ),
	hero2: css( styles.hero2 ),
	hero3: css( styles.hero3 ),
	seeMorePostsButton: css( styles.seeMorePostsButton ),
	subTitle: css( styles.subTitle ),
	heroImage: css( styles.heroImage ),
	subHeroImage: css( styles.subHeroImage ),

}