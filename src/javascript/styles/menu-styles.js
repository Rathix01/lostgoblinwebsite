const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		height: '100px',
		background: "url(images/menu-background.png) no-repeat center 6px",
		zIndex: "1",
		marginTop: "-5px",
		position: "relative",

		':before': {
	        content: '" "',
	        background: "url(images/menu-top-line.png) repeat-x",
	        height: "20px",
	        width: "100%",
	        position: "absolute",
	        top: "0px",
	        left: "0px"
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
		width: "740px",
		height: "55px"
	},
	option: {
		flexGrow: "1",
		border: "none",
		outline: "none",
		backgroundColor: "transparent",
		fontFamily: '"Architects Daughter"',
		fontSize: "22px",
		color: "#fff",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "all 0.2s",
		backgroundPosition: "center 8px",
		position: "relative",

		":before": {
			content: "' '",
			height: "60px",
			background: "url(images/menu-hover-background.png) no-repeat center 8px",
			opacity: "0",
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100%",
			zIndex: "-1",
			transition: "all 0.2s",
		},

		":hover": {
			transform: "translateY(-1px)",
			filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))",
			color: "black"
		},

		":hover:before": {
			opacity: "1"
		},

		":active": {
			background: "url(images/menu-hover-background.png) no-repeat center 8px",
			transform: "translateY(0px)",
			filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
		}
	},
	socialMediaButtonContainer: {
		'@media (max-width: 1200px)': {
            display: "none"
        }
	},
	socialMediaButtons: {
		position: "absolute",
		right: "-48px",
		top: "13px",
		width: "488px",
		height: "90px",
		display: "flex",
		flexDirection: "row",
		padding: "8px 15px 0px",
		boxSizing: "border-box",
		background: "url(images/social-media-background.png) no-repeat center 0px",


	},
	socialMediaButton: {
		width: "55px",
		height: "47px",
		flexGrow: "1",
		outline: "none",
		border: "none",
		cursor: "pointer",
		filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
		transition: "all 0.2s",

		":hover": {
			transform: "translateY(-1px)",
			filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"
		},

		":active": {
			transform: "translateY(1px)",
			filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))"
		}
	},
	twitterButton: {
		background: "url(images/twitter-menu-button.png) no-repeat center center",
	},
	facebookButton: {
		background: "url(images/facebook-menu-button.png) no-repeat center center",
	},
	youtubeButton: {
		background: "url(images/youtube-menu-button.png) no-repeat center center",
	},
	instagramButton: {
		background: "url(images/instagram-menu-button.png) no-repeat center center",
	},
	pintrestButton: {
		background: "url(images/pintrest-menu-button.png) no-repeat center center",
	}
})

module.exports = {
	container: css( styles.container ),
	main: css( styles.main ),
	menuOptions: css( styles.menuOptions ),
	option: css( styles.option ),
	socialMediaButtonContainer: css( styles.socialMediaButtonContainer ),
	socialMediaButtons: css( styles.socialMediaButtons ),
	twitterButton: css( styles.twitterButton, styles.socialMediaButton ),
	facebookButton: css( styles.facebookButton, styles.socialMediaButton ),
	youtubeButton: css( styles.youtubeButton, styles.socialMediaButton ),
	instagramButton: css( styles.instagramButton, styles.socialMediaButton ),
	pintrestButton: css( styles.pintrestButton, styles.socialMediaButton )
}