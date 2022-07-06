import React from 'react';
import { Alert, Button } from "react-bootstrap";

import AvatarCustomization from "../shared/avatar-customization";

import '../../assets/css/layouts.css';
import NavBarPage from '../shared/nav-bar-page';

import ConfirmDialog from '../shared/confirm-dialog';
import { isGameRunning } from '../../logic/is-game-running';

class JoinRoomPage extends React.Component {

    playerData;

    constructor(props) {
        super(props);
        this.state = { alert: null, showDialog: false };
    }

    componentDidMount() {
        this.props.socket.on('joinresponse', (data) => {
            if(!data.success) {
                this.alert({type: 'danger', message: this.props.localization.localize('server-error_join-failed')});
                return;
            }
            window.localStorage.setItem('diximusGameId', data.gameId);
            window.localStorage.setItem('diximusPlayerId', data.playerId);
            window.localStorage.setItem('diximusPrivateId', data.privateId);
            if(typeof(this.props.onSuccessfulJoin) === 'function') this.props.onSuccessfulJoin();
        });
    }

    alert = (alert) => {
        this.setState({alert: alert});
    }

    dismissAlert = () => {
        this.setState({alert: null});
    }

    render() {
        return (
            <NavBarPage localization={this.props.localization} forceRerender={this.props.forceRerender}>
                <h1>{this.props.localization.localize('join-room-page_join-game')}</h1>
                <div style={{height: '2em'}}></div>
                <AvatarCustomization
                    localization={this.props.localization}
                    onDataUpdated={(data) => this.onDataUpdated(data)}
                    maxIndices={[9, 7, 7]}
                    onEnter={() => this.onJoinGame()}/>
                <Button onClick={(event) => this.onJoinGame(event)} variant="primary">
                    {this.props.localization.localize('join-room-page_join-game')}
                </Button>
                <div style={{position: "absolute", bottom: "5%", left: "20%", right: "20%"}}>
                    <Alert variant={this.state.alert?.type} onClose={() => this.dismissAlert()} show={this.state.alert} dismissible>
                        {this.state.alert?.message}
                    </Alert>
                </div>
                <ConfirmDialog show={this.state.showDialog} localization={this.props.localization}
                    onConfirm={this.joinGame} onCancel={() => this.setState({ showDialog: false })}
                    title={this.props.localization.localize('join-room-page_modal-title')}>
                    {this.props.localization.localize('join-room-page_modal-body')}
                </ConfirmDialog>
            </NavBarPage>
        );
    }

    onDataUpdated = (playerData) => {
        this.playerData = playerData;
    }

    joinGame = () => {
        this.props.socket.emit('join', {
            gameId: this.props.params.id,
            player: this.playerData,
        })
    }

    onJoinGame = () => {
        if(!this.playerData?.name) {
            this.alert({type: 'danger', message: this.props.localization.localize('error-message_missing-name')});
            return;
        }
        isGameRunning().then(res => {
            if(res) {
                this.setState({ showDialog: true });
                return;
            }
            this.joinGame();
        });
    }
    
}

export default JoinRoomPage;