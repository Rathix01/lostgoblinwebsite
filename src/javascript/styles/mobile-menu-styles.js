const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
		boxSizing: "border-box",
		height: '300px',
		minWidth: "300px",
		width: "100%",
		zIndex: "1",
		top: "-300px",
		background: "#211815",
		margin: "0px auto",
		paddingTop: "90px"
	},
	menuAreas: {
		display: "flex",
		flexDirection: "column",
		paddingTop: "10px",
	},
	menuOptions: {
		display: "flex",
		flexDirection: "column",
		minHeight: "180px"
	},
	socialMediaArea: {
		width: "450px",
		position: "relative",
		margin: "0px auto",
		display: "none",

		'@media (max-width: 550px)': {
            width: "100%",
        },
	},
	option: {
		paddingTop: "10px"
	}
})

module.exports = {
	container: css( styles.container ),
	menuAreas: css( styles.menuAreas ),
	menuOptions: css( styles.menuOptions ),
	socialMediaArea: css( styles.socialMediaArea ),
	option: css( styles.option )
}