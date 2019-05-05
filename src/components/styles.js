import styled from 'styled-components';

import {
  mainContainerWidth,
  gamesBackRowFactor,
  gamesBackRowHeight,
  teamTitleWidth,
  leftMargin,
  breakPoint,
} from './constants';

export const PlayoffTeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PlayoffTeams = styled.div`
  display: flex;
  flex-direction: column;
`
export const PlayoffHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${gamesBackRowHeight}px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #DDD;
  background: #999;
  margin-bottom: 10px;
`
export const PlayoffTeamRank = styled.div`
  font-weight: 
    ${props => props.rank < 5 ? 600 : 400 };
  display: flex;
  align-items: center;
  padding: 4px;
`
export const PlayoffTeamRecord = styled.div`
  font-family: 'Inconsolata'; 
  font-weight: 400;
  font-size: 13px;
  margin-left: auto;
`
export const PlayoffTeamTileStyle = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Open Sans';
  font-weight: 400;
  border: 1px solid #CCC;
  padding: 0 10px 0 4px;
  width: 130px;
  background: #FFF;
  margin-bottom: ${props => props.rank < 5 ? 1 : 8 }px;
`
export const PlayoffBracketContainer = styled.div`
  position: absolute;
  top: ${gamesBackRowHeight / 2}px;
  right: ${leftMargin + 10}px;
  width: 310px;
  font-family: 'Open Sans';
  font-weight: 400;
  z-index: ${props => (props.hovered) ? 200 : 0 };
  padding: 12px 12px 4px 12px;
  background: #F1F1F1;
  border: 1px solid #CCC;
  box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
`
export const LoadingScreen = styled.div`
  position: relative;
  width: ${mainContainerWidth}px;
  margin 0 auto;
  border: 1px solid #DDD;
  margin-bottom: ${gamesBackRowHeight}px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`
export const TableContainer = styled.div`
  position: relative;
  width: ${mainContainerWidth}px;
  margin 0 auto;
  border: 1px solid #DDD;
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`
export const GamesBackRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #CCC;
  background-image: 
    linear-gradient(180deg, #EEE 20%, #fff 100%);
  height: ${gamesBackRowHeight}px;
  font-size: 18px;  
  font-weight: 800;
  padding: 0 10px;
`
export const TeamTile = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  display: flex;
  align-items: center;
  background: ${props => props.color};
  height: ${gamesBackRowHeight * gamesBackRowFactor}px;
  width: ${teamTitleWidth}px;
  font-size: 30px;
  font-weight: 800;
  color: #FFF;
  padding: 4px 4px 4px 10px;
  z-index: ${props => props.hovered ? 50 : props.z};
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.5);
  border-left: 6px solid ${props => props.secondaryColor};
`
export const TeamTileExpandedContainer = styled.div`
  position: absolute;
  top: ${props => 
    props.top + gamesBackRowHeight * gamesBackRowFactor}px;
  left: ${props => props.left}px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: ${teamTitleWidth}px;
  background: rgba(255,255,255,.95);
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.5);
  border-left: 6px solid ${props => props.secondaryColor};
  font-size: 14px;
  text-transform: uppercase;
  color: #000;
  padding: 0 10px 10px 10px;
  z-index: 100;
`
export const BarGraphHeader = styled.div`
  position: absolute;
  top: 14px;
  left: 0;
  width: 280px;
  text-align: center;
  font-weight: 600;
  color: #333;
  text-shadow: #FFF 1px 1px 2px;
  z-index: 2;
`
export const BarGraphContainer = styled.div`
  position: relative;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  font-size: 12px;
`
export const BarGraphWinSegment = styled.span`
  display: flex;
  flex-grow: ${props => props.height};
  background: ${props => props.primaryColor};
  color: #FFF;
  font-size: 10px;
  text-shadow: 1px 1px 4px #666;
  width: 26px;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
  margin-bottom: 4px;
  z-index: 1;
`
export const BarGraphLossSegment = styled.span`
  display: flex;
  flex-grow: ${props => props.height};
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 6px;
`

export const BarGraph75Rule = styled.hr`
  position: absolute;
  left: 15px;
  top: 73px;
  width: 242px;
  text-align: center;
  border: 1px;
  border-top: 1px solid #CCC;
  z-index: 0;
`
export const ConferenceHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${mainContainerWidth}px;
  height: 36px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
  color: #FFF;
  background: ${props => props.confBGColor};
  margin-bottom: 4px;
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`
export const ConferenceHeadButton = styled.a`
  position: absolute;
  top: 6px;
  right: 6px;
  height: 24px;
  line-height: 22px;
  background-color: #EFEFEF;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #333;
  font-size: 15px;
  font-weight: 600;
  padding: 0 16px;
  text-shadow: 0px 1px 0px #ffffff;
  text-transform:  lowercase;
  user-select: none;
  &: hover {
    background-color: #FFF;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
    color: #000;
  }
`
export const SeasonSelect = styled.select`
  position: absolute;
  top: 6px;
  left: 6px;
  height: 24px;
  background-color: #EFEFEF;
  border-radius: 3px;
  color: #333;
  font-size: 15px;
  font-weight: 600;
  user-select: none;
  &: hover {
    background-color: #FFF;
    color: #000;
  }
`
export const StreaksContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  justify-content: ${props => props.direction};
  height: ${gamesBackRowHeight * gamesBackRowFactor - 4}px;
  width: 30px;
`
export const StreakDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background: 
    ${props => (props.streak > 0) 
      ? `rgba(0,100,0,.7)` 
      : `rgba(139,0,0,.7)` };
  border: 1px solid rgba(255,255,255,.5);
`
export const RankStyle = styled.span`
  font-size: 30px;
  text-shadow: 
    ${props => (props.index > 7) 
      ? `none` 
      : `1px 1px 4px #666` };
  color: 
    ${props => (props.index > 7) 
      ? `rgba(255,255,255,.6)` 
      : `rgba(255,255,255,1)` };
`
export const MouseOverMessage = styled.div`
  position: absolute;
  margin: 0 auto;
  top: ${gamesBackRowHeight * 4}px;
  left: 0;
  width: 1200px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 18px;
  color: #CCC;
  z-index: 0;
  vertical-align: middle;
`
export const TableCell = styled.td`
  display: table-cell;
  font-family: 'Open Sans'; 
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #444;
  text-align: right;
  padding-left:  8px;
  border-bottom: 1px solid #CDCDCD;
  vertical-align: bottom;
`
export const BaseTableHead = styled.th`
  display: table-cell;
  font-family: 'Open Sans'; 
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #444;
  text-align: center;
  padding:  8px;
  border-bottom: 1px solid #000;
  vertical-align: bottom;
  max-width: 100px;
`
export const BaseTableCell = styled.td`
  display: table-cell;
  padding:  3px 0px;
  vertical-align: middle;
  white-space: nowrap;
  border-bottom: ${props => props.hovered 
    ? '1px solid #000'
    : '1px solid #cdcdcd'
  };
  border-right: ${props => props.rightBorder 
    ? '1px solid #000'
    : ''
  };
  background-color: ${props => props.hoveredRow 
    ? '#F7F7F7'
    : '#FFF'
  };

`
export const GamesBackCellStyle= styled.td`
  display: table-cell;
  padding:  3px 0px;
  vertical-align: middle;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  border-bottom: ${props => props.hovered 
    ? '1px solid #000'
    : '1px solid #cdcdcd'
  };
  border-right: ${props => props.rightBorder 
    ? '1px solid #000'
    : ''
  };
  background-color: ${props => props.bgColor};

`
export const TeamRankCell = styled(BaseTableCell)`
  text-align: right;
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 22px;
  color: ${props => props.rank < 8 
    ? '#666'
    : '#AAA'
  };
`
export const TeamNameCell = styled(BaseTableCell)`
  text-align: left;
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 22px;
  color: #999;
  color: ${props => props.rank < 8 
    ? '#777'
    : '#999'
  };
`
export const RecordCell = styled(BaseTableCell)`
  font-family: 'Inconsolata'; 
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #333;
  text-align: center;
`
export const WinRateDeltaCell = styled(RecordCell)`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontWeight > 20
    ? '#FFF'
    : '#555'
  };
  font-weight: ${props => props.fontWeight > 20
    ? 900
    : 300
  };
  width: ${props => props.width };
`
export const TableViewDescription = styled.div`
  display: flex;
  justify-content; center;
  margin: 0 auto;
  font-size: 13px;
  padding: 8px;
  background-color: #EEE;
`
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: ${mainContainerWidth}px;
  margin: 0 auto;
  margin-bottom: 18px;
  padding: 20px;
  background: #DDD;
  @media (max-width: ${breakPoint}px) {
    flex-direction: column;
  }
`
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${teamTitleWidth}px;
  justify-content: 
    ${props => props.space 
      ? 'space-between' 
      : 'flex-start'};
  color: #777;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: ${breakPoint}px) {
    display: ${props => props.hideMobile && 'none'}
  }
`
export const DesktopMessage = styled.div`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 14px;
  font-weight: 600;
  padding: 16px;
  background-color: #FFF;
  margin: 20px 0;
  @media (min-width: ${breakPoint}px) {
    display: none;
  }
  & p {
    margin 0 0 10px 0;
  }
  & p:last-child {
    margin-bottom: 0px;
  };
}

`
export const FooterHeader = styled.div`
  color: #999;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 6px;
`
export const FooterLogo = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: 800;
`
export const FooterLink = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 6px;
  @media (max-width: ${breakPoint}px) {

    display: ${props => props.hideMobile && 'none'}
  }
`

// .reverse().map(function(...

// "6px 6px 6px 0px rgba(0,0,0,0.5)" : "none"}

// ||
// ( (filteredData[i][37] - lastGamesBackRow >= 2) 
//   && ( currentLeftPosition === leftMargin  ) )
