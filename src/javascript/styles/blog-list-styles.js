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
	list: {
		border: "solid 1px red",
		margin: "0px auto",
		maxWidth: "1200px",
	},
	itemContainer: {
		opacity: "1",
		border: "solid 1px #fff"
	}

	// header: {
	// 	background: "url(images/dev-blog-line.png) no-repeat center bottom",
	// 	width: "100%",
	// 	color: "#F68F21",
	// 	height: "70px",
	// 	margin: "0px auto",
	// 	maxWidth: "1200px",
	// 	fontFamily: '"Architects Daughter"',
	// },
	// content: {
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	margin: "0px auto",
	// 	maxWidth: "1200px",
	// },
})

module.exports = {
	container: css( styles.container ),
	list: css( styles.list ),
	itemContainer: css( styles.itemContainer )
}