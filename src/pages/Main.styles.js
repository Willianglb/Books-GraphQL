import styled from "styled-components";

export const Grid1 = styled.div`
grid-column: 1 / 1;
grid-row: 1 / 2;

}`;

export const Grid2 = styled.div`
grid-column: 1;
grid-row: 2 / 2;

@media(min-width: 600px){
    grid-column: 2;
    grid-row: 1 / 2;
}`;

export const Grid3 = styled.div`
grid-column: 1;
grid-row: 3;

@media(min-width: 600px){
    grid-column: 1;
    grid-row: 2;
}`;