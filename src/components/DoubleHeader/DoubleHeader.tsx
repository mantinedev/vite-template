
import { Container } from '@mantine/core';

import classes from './DoubleHeader.module.css';


export function DoubleHeader() {
  
  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
       <div> <p>Serene</p>
        <h1>MINDS</h1>
        </div>
      </Container>
    </header>
  );
}