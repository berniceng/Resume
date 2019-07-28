import React from 'react';
import { TileProps } from '../propType';
import * as styles from '../scss/tile.scss';

const Tile = (props: TileProps) => {
  return(
    <div className={styles.card}>
      <div>
        <img src={props.image}/>
      </div>
      <div>
        <div>
          {props.title}
        </div>
        <div>
          {props.desc}
        </div>
      </div>
    </div>
  );
};

export default Tile;
