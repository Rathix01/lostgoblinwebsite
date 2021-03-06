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
		textIndent: "10px",
		position: "relative",
	},
	hero: {
		maxWidth: "1200px",
		position: "relative",
		background: "#BCB1A5",
		margin: "0px auto",
		cursor: "pointer",
		textAlign: "center",
		opacity: "1",
	},
	twoMore: {
		display: "flex",
		flexDirection: "row",
		margin: "0px auto",
		maxWidth: "1200px",

		'@media (max-width: 800px)': {
            flexDirection: "column",
        }
	},
	hero2: {
		maxWidth: "50%",
		flexGrow: "1",
		position: "relative",
		cursor: "pointer",
		overflow: "hidden",
		background: "#9F9284",

		'@media (max-width: 800px)': {
            maxWidth: "100%",
            maxHeight: "none",
        }
	},
	hero3: {
		maxWidth: "50%",
		flexGrow: "1",
		position: "relative",
		cursor: "pointer",
		overflow: "hidden",
		background: "#303030",

		'@media (max-width: 800px)': {
            maxWidth: "100%",
            maxHeight: "none",
        }
	},
	heroImage: {
		maxWidth: "100%",
		height: "auto",
		margin: "0px auto"
	},
	subImageContainer: {
		height: "100%",
		width: "100%",
		display: 'flex',
		flexDirection: "column",
		justifyContent: "center",
	},
	subHeroImage: {
		maxWidth: "100%",
		maxHeight: "100%",
	},
	latestPostFeatureTile: {
		background: "url(images/hero-tile-text-background.png)",
		position: "absolute",
		bottom: "70px",
		left: "0px",
		maxWidth: "643px",
		width: "100%",
		height: "182px",
		color: "#fff",
		padding: "40px",
		boxSizing: "border-box",
		marginLeft: "-1px",
		fontFamily: '"Roboto"',

		'@media (max-width: 800px)': {
            height: "100px",
            bottom: "0px",
            padding: "10px"
        }
	},
	latestPostTitle: {
		margin: "0px 0px 10px 0px"
	},
	seeMorePostsButton: {
		margin: "-5px auto 0px",
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
		fontFamily: '"Roboto"',
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
	subImageContainer: css( styles.subImageContainer ),
	subHeroImage: css( styles.subHeroImage ),
}