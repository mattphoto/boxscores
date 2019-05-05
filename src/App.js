import React from "react";
import NBA from "nba";
import styled from "styled-components";
import { GameTable } from './components/GameTable';
import moment from "moment";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      gameDate: moment(),
    };
    this.incrementDay = this.incrementDay.bind(this);
    this.decrementDay = this.decrementDay.bind(this);
  }

  componentDidMount() {
    this.setState({
      gameDate: moment().subtract(1, 'day')
    }, () => this.loadSeason(this.state.gameDate))
  }

  loadSeason(gameDate) {
    NBA.stats
      .scoreboard({ gameDate: gameDate.format('MM/DD/YYYY') })
      .then(results => {
        return results.available;
      })
      .then( data => {
        return (
          Promise.all(
            data.map((game)=>{
              return NBA.stats.boxScore({GameID: game.gameId})
            })
          )
        )
      })
      .then(
        function(data) {
          this.setState(function() {
            return {
              data: data,
            };
          });
        }.bind(this)
      );
  }

  incrementDay() {
    this.setState({
      gameDate: this.state.gameDate.add(1, 'day')
    }, () => this.loadSeason(this.state.gameDate))
  }

  decrementDay() {
    this.setState({
      gameDate: this.state.gameDate.subtract(1, 'day')
    }, () => this.loadSeason(this.state.gameDate))
  }

  render() {
    const {
      data,
      gameDate,
    } = this.state;
    if (data[0]) {
      console.log(data)
      console.log(data[0].resultSets[0].rowSet)
      console.log('data[0].resultSets[0]', data[0].resultSets[0])
      console.log('data[0].resultSets[1]', data[0].resultSets[1])
      console.log('data[0].resultSets[2]', data[0].resultSets[2])
      if (data[0].resultSets[1].rowSet[0] && !data[0].resultSets[1].rowSet[0][4]) {
        return <div>no data returned from api. Either there are no games this day, or boxScore for the first game is unavailable.</div>
      }
    } else {
      return <div>no data returned from api. Either there are no games this day, or boxScore for the first game is unavailable.</div>
    }





    return (
      <Container>
        <DateSelectorStyle>
          <button onClick={this.decrementDay}>&lt;</button>
          <span>{gameDate.format('MM/DD/YYYY')}</span> 
          <button onClick={this.incrementDay}>&gt;</button>
        </DateSelectorStyle>
        {
          data.map((game, index)=>{
          if (game.resultSets[1].rowSet[0] && !!game.resultSets[1].rowSet[0][4]) {
            return(
              <GameContainer key={game.parameters.GameID}>
                <ScoreContainer >
                  {game.resultSets[1].rowSet[0][4]} {' '}                 
                  {game.resultSets[1].rowSet[0][2]} {' '}
  
                  {game.resultSets[1].rowSet[0][23]}  {'  '}
                  | {' '}
                  {game.resultSets[1].rowSet[1][4]}  {' '}
                  {game.resultSets[1].rowSet[1][2]} {' '}
                  {game.resultSets[1].rowSet[1][23]}
                </ScoreContainer>
                <GameTable 
                  gameData={data[index].resultSets[0].rowSet}
                />
                {/* <GameTable 
                  teamData={data[index].resultSets[1].rowSet}
                /> */}
              </GameContainer>
            )
          }
        })
        
        }
      </Container>
    );
  }
}

const DateSelectorStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 180px;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  width: 800px;
  font-size: 18px;
  font-weight: 600;
`;

const Container = styled.div`
  margin-bottom: 200px;
`;

const GameContainer = styled.div`
  margin: 0%;
`;

export default App;