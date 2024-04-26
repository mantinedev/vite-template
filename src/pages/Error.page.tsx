import { Container, Flex, Paper } from '@mantine/core';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError() as any;

	return (
		<Container id="error-page" h="70vh">
			<Flex align="center" justify="center" h="100%" w="100%">
				<Paper>
					<h1>Oops!</h1>
					<p>Sorry, an unexpected error has occurred.</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				</Paper>
			</Flex>
		</Container>
	);
}
