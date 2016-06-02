const Aphrodite = require('aphrodite')
const StyleSheet = Aphrodite.StyleSheet;
const css = Aphrodite.css;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		boxSizing: "border-box",
		minHeight: "400px",
		paddingTop: "60px",
		position: "relative",
		overflow: "hidden",

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
	},
	contactUs: {
		margin: "0px auto",
		maxWidth: "1200px",
		display: "flex",
		flexDirection: "column",
		position: "relative",
		paddingBottom: "45px",
	},
	nameAndEmail: {
		flexGrow: "1",
		cursor: "pointer",
		display: "flex",
		flexDirection: "row",
	},
	yourMessage: {
		flexGrow: "1",
		cursor: "pointer",
		paddingRight: "5px"
	},
	textInput: {
		flexGrow: "1",
		boxSizing: "border-box",
		margin: "3px",
		background: "#211815",
		color: "#DDD",
		border: "none",
		outline: "none",
		padding: "15px",
		fontSize: "16px",
	},
	textAreaInput: {
		boxSizing: "border-box",
		margin: "3px 5px 3px 3px",
		background: "#211815",
		color: "#DDD",
		border: "none",
		outline: "none",
		padding: "15px",
		fontSize: "16px",
		width: "100%",
		fontFamily: "Arial",
		minHeight: "200px"
	},
	sendMessageButton: {
		margin: "-6px 0px 0px 3px",
		width: "100%",
		background: "#F68F21",
		color: "#fff", 
		outline: "none",
		border: "none",
		display: "block",
		padding: "15px",
		boxSizing: "border-box",
		fontSize: "18px",
		cursor: "pointer",

		":hover": {
			background: "#E2811F"
		}
	},
	errorMessage: {
		background: "red",
		color: "#fff",
		boxSizing: "border-box",
		marginLeft: "3px",
		marginRight: "6px",
		padding: "10px",
		fontFamily: "Arial",
		fontSize: "12px",
		width: "60%",
		position: "absolute",
		bottom: "0px"
	},
	thankyouContainer: {
		position: "absolute",
		top: "150px",
		width: "100%",
		height: "330px",
		boxSizing: "border-box",
		padding: "10px",
	},
	thankyou: {
		color: "#fff",
		margin: "0px auto",
		maxWidth: "1200px",
		textAlign: "center",
		fontSize: "30px",
		fontFamily: '"Architects Daughter"',
		background: "#211815",
		height: "100%",
		boxSizing: "border-box",
		padding: "30px",
	}
})

module.exports = {
	container: css( styles.container ),
	header: css( styles.header ),
	contactUs: css( styles.contactUs ),
	nameAndEmail: css( styles.nameAndEmail ),
	yourMessage: css( styles.yourMessage ),
	textInput: css( styles.textInput ),
	textAreaInput: css( styles.textAreaInput ),
	sendMessageButton: css( styles.sendMessageButton ),
	errorMessage: css( styles.errorMessage ),
	thankyouContainer: css( styles.thankyouContainer ),
	thankyou: css( styles.thankyou )
}