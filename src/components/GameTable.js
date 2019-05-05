import React from 'react';

// import loadingIcon from '../assets/loading.svg';
import { GamePlayerRow } from './GamePlayerRow';
// import { CURRENT_SEASON } from '../components/constants';

import {
  TableContainer
  ,
  LoadingScreen,
  BaseTableHead,
  TableViewDescription,
} from '../components/styles';

export class GameTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: -1
    };
    this.hoverTeamRow = this.hoverTeamRow.bind(this);
    this.hoverOutTeamRow = this.hoverOutTeamRow.bind(this);
  }
  hoverTeamRow( index ) {
    this.setState({ hoveredIndex: index})
  }
  hoverOutTeamRow() {
    this.setState({ hoveredIndex: -1})
  }

  render() {

    const { gameData, teamData, isLoading } = this.props;
    if ( isLoading ) {
      return (
        <LoadingScreen>
          {/* <img src={ loadingIcon } alt="loading icon" /> */}
          <p>loading &hellip;</p>
        </LoadingScreen>
      );
    }

    // let data = [];
    // if ( !!gameData || !!teamData ) {
    //   console.log("TCL: GameTable -> render -> gameData || !!teamData", gameData , teamData)
    //   if (!!teamData) {
    //     let buildup = []
    //     for (let i = 0; i < 2; i++) {
          
    //       for (let j = 5; j < 25; j++) {
    //         buildup[i][j] = teamData[i][j+8];
    //       }
    //     }
    //     data = buildup;
    //   } else if (!!gameData) {
    //     data = gameData;
    //   }
    // }

		// console.log("TCL: GameTable -> render -> data", data)

    const data = gameData ; 

    return (
      <TableContainer
       >
        <table 
          style={{ 
            borderCollapse: 'collapse',
            width: '100%',
            overflowX: 'auto'
          }}>
          <thead>
            <tr>
              {/* <BaseTableHead 
                style={{
                  textAlign: 'right', 
                  width: '30px',
                  paddingRight: '0'
                }}
              >Pt.<br/>Dif</BaseTableHead> */}
              <BaseTableHead >Player</BaseTableHead>
              <BaseTableHead >MIN</BaseTableHead>
              <BaseTableHead >PTS</BaseTableHead>
              <BaseTableHead >2PT</BaseTableHead>
              <BaseTableHead >3PT</BaseTableHead>
              <BaseTableHead >FT</BaseTableHead>
              <BaseTableHead >FG%</BaseTableHead>
              <BaseTableHead >eFG%</BaseTableHead>
              <BaseTableHead >TS%</BaseTableHead>
              <BaseTableHead >REB</BaseTableHead>
              <BaseTableHead >AST</BaseTableHead>
              <BaseTableHead >TO</BaseTableHead>
              <BaseTableHead >STL</BaseTableHead>
              <BaseTableHead >BLK</BaseTableHead>
              <BaseTableHead >PF</BaseTableHead>
              <BaseTableHead >+/-</BaseTableHead>
            </tr>
          </thead>
          <tbody>




          { data.map( (game, index) => {
            return ( !!game[8] &&
              <GamePlayerRow
                hoverTeamRow={ this.hoverTeamRow.bind(this, index) }
                hoverOutTeamRow={ this.hoverOutTeamRow }
                game={ game }
                index={ index }
                hoveredIndex={ this.state.hoveredIndex }
                key={ index+'str'}
                
              />
            )}
          )}
          </tbody>
        </table>
        {/* <TableViewDescription>
          Color and intensity of cell background indicate the difference between
          the win loss record in the each cell vs. a team's overall record by 
          percentage.
        </TableViewDescription> */}
      </TableContainer
      >
    )

  }
}


