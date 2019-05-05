import React, { Component } from 'react';

import { WinRateTableCell } from './WinRateTableCell';
import { convertMinutes } from '../utilityFunctions';

import {
  medianPts36,
  median2ptRate,
  median3ptRate,
  medianFTRate,
  avgFGRate,
  medianAst,
  eFGAvgRate,
  TSAvgRate,
  RB36,
  medianTO,
  medianSTL,
  medianBLK,
  medianPF,
} from './constants';
import {
  TeamRankCell,
  BaseTableCell,
  TeamNameCell,
  RecordCell,
} from '../components/styles';


export class GamePlayerRow extends Component {


  render() {

    const {
      hoverTeamRow,
      hoverOutTeamRow,
      game,
      index,
      hoveredIndex,
    } = this.props;

    const hovered = (index === hoveredIndex || index + 1 === hoveredIndex);
    const hoveredRow = (index === hoveredIndex);
    const minutes = convertMinutes(game[8]);
    

    const PTS = game[26];
    const PT2M = (game[9] - game[12]);
    const PT2A = (game[10] - game[13]);

    const PT3M = game[12];
    const PT3A = game[13];

    const FTM = game[15];
    const FTA = game[16];
    
    const FGM = game[9];
    const FGA = game[10];
    const FGRate = game[11];
    const FGRateFactor = 27;
    
    const eFGRate = ( game[9] + 0.5 * game[12] ) /game[10];
    const eFGRateFactor = 27;
    
    
    const TSRate = game[26] / ( 2 * (game[10] + 0.44 * game[16]));
    
    const minutesFactor = 0.25;
    const pointsFactor = 28;
    const PT2Factor = 9;
    const PT3Factor = 9.5;
    const FTFactor = 9;
    const TSRateFactor = 30;
    const AstFactor = 2;
    const TOFactor = 2.6;
    const RBFactor = 3;
    const STLFactor = 5;
    const BLKFactor = 4;
    const PFFactor = 8;
    const PMFactor = .7;

    return (
      <tr key={index+"trtb"}
        onMouseEnter={ hoverTeamRow }
        onMouseLeave={ hoverOutTeamRow }
      >
        <BaseTableCell 
          style={{width: '46px', textAlign: 'center'}}                 
          hovered={hovered}
          hoveredRow={hoveredRow}
        >
          {game[5]}
        </BaseTableCell>
        <WinRateTableCell
        //minutes
          hovered={hovered}
          datum={ minutes * minutesFactor}
          reference={ 19.2 * minutesFactor}
          content={ Math.round(minutes) }
          width={ '60px'}
        />
        <WinRateTableCell
        //points
          hovered={hovered}
          datum={ PTS / minutes * pointsFactor }
          reference={ medianPts36 / 36 * pointsFactor}
          content={ PTS }
          scaleFactor={minutes/15}
        />
        <WinRateTableCell
        // 2ptm/2pta
          hovered={hovered}
          datum={ PT2M * PT2Factor}
          reference={median2ptRate * PT2A * PT2Factor}
          content={`${game[9] - game[12]}/${game[10] - game[13]}`}
        />
        <WinRateTableCell
        //3pm/3pa
          hovered={hovered}
          datum={ PT3M * PT3Factor}
          reference={median3ptRate * PT3A * PT3Factor}
          content={`${game[12]}/${game[13]}`}
        />
        <WinRateTableCell
        // FTM/FTA
          hovered={hovered}
          datum={FTM * FTFactor}
          reference={medianFTRate * FTA * FTFactor }
          content={`${game[15]}/${game[16]}`}
        />
        <WinRateTableCell
        //fg%
          hovered={hovered}
          datum={FGRate * FGRateFactor}
          reference={avgFGRate * FGRateFactor}
          // content={FGRate + ' ' + FGM + ' ' + avgFGRate}
          scaleFactor={FGA/6}
          content={Math.round(game[11] * 100) + '%'}
        />

        <WinRateTableCell
          // eFG %
          hovered={hovered}
          datum={eFGRate * eFGRateFactor}
          reference={eFGAvgRate * eFGRateFactor}
          scaleFactor={FGA/6}
          content={ Math.round((!!eFGRate ? eFGRate : 0) * 100) + '%' }
        />
        <WinRateTableCell
        //ts %           
          hovered={hovered}
          datum={TSRate * TSRateFactor}
          reference={TSAvgRate * TSRateFactor}
          scaleFactor={FGA/6}
          content={ Math.round((!!TSRate ? TSRate : 0) * 100) + '%' }
        />
        <WinRateTableCell
        // rebounds
          hovered={hovered}
          datum={game[20]/minutes * 36 * RBFactor }
          reference={RB36 * RBFactor }
          scaleFactor={minutes/30}
          content={`${game[18]}|${game[19]}`}
        />
        <WinRateTableCell
          //assist
          hovered={hovered}
          datum={game[21]/minutes * 36 * AstFactor}
          reference={medianAst  * AstFactor}
          scaleFactor={minutes/20}
          content={game[21]}
          width={ '60px'}

        />
        <WinRateTableCell
        //turnover
          hovered={hovered}
          datum={medianTO  * TOFactor}
          reference={game[24]/minutes * 36 * TOFactor}
          scaleFactor={minutes/20}
          content={game[24]}
          width={ '60px'}

        />
        <WinRateTableCell
        //steals
          hovered={hovered}
          datum={game[22]/minutes * 36 * STLFactor}
          reference={medianSTL * STLFactor}
          scaleFactor={minutes/30}
          content={game[22]}
          width={ '60px'}
        />
        <WinRateTableCell
          //blocks
          hovered={hovered}
          datum={game[23]/minutes * 36 * BLKFactor}
          reference={medianBLK * BLKFactor}
          scaleFactor={minutes/30}
          content={game[23]}
          width={ '60px'}
        />
        <WinRateTableCell
          //fouls
          hovered={hovered}
          datum={medianPF * PFFactor}
          reference={game[25]/minutes * 36 * PFFactor}
          scaleFactor={minutes/30}
          content={game[25]}
          width={ '60px'}
        />
        <WinRateTableCell
        // +/-
          hovered={hovered}
          datum={game[27] * PMFactor}
          reference={0}
          content={game[27]}
          width={ '60px'}
        />
      </tr>
    )






  }
}