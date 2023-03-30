
export default function About() {
	return <>
		<div className="container">
			<div className="py-4">
				<h1>About Json</h1>
				<p className="lead">
					JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

					JSON is built on two structures:

					A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
					An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
					Why?
					Most of the time when trying a new library, hacking a prototype or following a tutorial, I found myself in need of some data.

					I didn't like the idea of using some public API because I had the feeling that I was spending more time registering a client and understanding a complex API than focusing on my task.

					But I liked the idea of image placeholders for web designers. So I decided to code a little Express server inspired by that and here is JSONPlaceholder.

					You can find it running
				</p>
			</div>
		</div>
	</>
}