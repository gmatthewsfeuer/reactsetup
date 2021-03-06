import Document, {
	DocumentProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Template for React, with Next.js, SWR, Axios, TypeScript, ESLint, Prettier, Framer Motion, Tailwind and Sass" />
					<link rel="shortcut icon" href="favicon.ico" type ="image/x-icon" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
					href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
					rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
