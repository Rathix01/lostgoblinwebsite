const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	stickyContainer: {
		width: '100%',
		boxSizing: "border-box",
		height: '100px',
		background: "url(images/sticky-menu-background.png) no-repeat center 15px",
		zIndex: "5",
		marginTop: "-5px",
		position: "fixed",
		top: "0px",
		filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",

		':before': {
	        content: '" "',
	        background: "url(images/menu-top-line.png) repeat-x",
	        height: "20px",
	        width: "100%",
	        position: "absolute",
	        top: "-1px",
	        left: "0px"
	    },

	    '@media (max-width: 1200px)': {
            backgroundPosition: "left 15px"
        },

        '@media (max-width: 400px)': {
            background: "url(images/sticky-menu-background-small-screen.png) no-repeat -20px 15px",
        }
	},
	main: {
		boxSizing: "border-box",
		margin: "0px auto",
		maxWidth: "1200px",
		height: "90px",
		paddingTop: "20px",
		position: "relative",
	},
	menuOptions: {
		display: "flex",
		flexDirection: "row",
		width: "500px",
		height: "55px",
		marginLeft: "260px",

		'@media (max-width: 1200px)': {
            position: "absolute",
            right: "150px"
        },

        '@media (max-width: 1000px)': {
            position: "absolute",
            right: "20px"
        },

        '@media (max-width: 850px)': {
            display: "none"
        }
	},
})

module.exports = {
	stickyContainer: css( styles.stickyContainer ),
	main: css( styles.main ),
	menuOptions: css( styles.menuOptions )
}