const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: "300px",
		paddingTop: "10px",

		':before': {
	        content: '" "',
	    }
	},
	list: {
		margin: "0px auto",
		maxWidth: "1200px",
	},
	itemContainer: {
		opacity: "1",
		display: 'flex',
		flexDirection: 'row',
		marginBottom: "10px",
		cursor: "pointer"
	},
	thumb: {
		height: "180px",
		width: "300px",
		marginRight: "30px",
		display: "flex",
		justifyContent: "center",
		overflow: "hidden"
	},
	thumbImg: {
		height: "100%",
	},
	title: {
		margin: "0px 0px 10px 5px",
		fontSize: "28px",
		color: "#F68F21",
		fontFamily: "Architects Daughter"
	},
	subtext: {
		color: "#FFF",
		fontFamily: "Roboto"
	}
})

module.exports = {
	container: css( styles.container ),
	list: css( styles.list ),
	itemContainer: css( styles.itemContainer ),
	thumb: css( styles.thumb ),
	title: css( styles.title ),
	subtext: css( styles.subtext ),
	thumbImg: css( styles.thumbImg )
}