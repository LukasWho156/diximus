import React from 'react';
import axios from "axios";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AvatarCustomization from "../shared/avatar-customization";
import NavBarPage from '../shared/nav-bar-page';

import { serverUrl } from '../../logic/server-url';
import '../../assets/css/layouts.css';
import ConfirmDialog from '../shared/confirm-dialog';
import { isGameRunning } from '../../logic/is-game-running';

class CreateRoomPageComponent extends React.Component {

    playerData;

    constructor(props) {
        super(props);
        this.state = { alert: null, showDialog: false };
    }

    componentDidMount() {
        this.props.socket.on('joinresponse', (data) => {
            if(!data.success) return;
            window.localStorage.setItem('diximusGameId', data.gameId);
            window.localStorage.setItem('diximusPlayerId', data.playerId);
            window.localStorage.setItem('diximusPrivateId', data.privateId);
            this.props.navigate(`/${data.gameId}`);
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
            <NavBarPage {...this.props}>
                <h1>{this.props.localization.localize('create-room-page_create-new-game')}</h1>
                <div style={{height: '2em'}}></div>
                <AvatarCustomization
                    localization={this.props.localization}
                    onDataUpdated={(data) => this.onDataUpdated(data)}
                    maxIndices={[9, 7, 7]}
                    onEnter={() => this.onCreateGame()}/>
                <Button onClick={event => this.onCreateGame()} variant="primary" type="submit">
                    {this.props.localization.localize('create-room-page_create-new-game')}
                </Button>
                <div style={{position: "absolute", bottom: "5%", left: "20%", right: "20%"}}>
                    <Alert variant={this.state.alert?.type} onClose={() => this.dismissAlert()} show={this.state.alert} dismissible>
                        {this.state.alert?.message}
                    </Alert>
                </div>
                <ConfirmDialog show={this.state.showDialog} localization={this.props.localization}
                    onConfirm={this.createGame} onCancel={() => this.setState({ showDialog: false })}
                    title={this.props.localization.localize('create-room-page_modal-title')}>
                    {this.props.localization.localize('create-room-page_modal-body')}
                </ConfirmDialog>
            </NavBarPage>
        );
    }

    onDataUpdated = (playerData) => {
        this.playerData = playerData;
    }

    createGame = () => {
        axios.post(`${serverUrl}/game/create/`).then(res => {
            this.props.socket.emit('join', {
                gameId: res.data.id,
                player: this.playerData,
            })
        })
    }

    onCreateGame = () => {
        if(!this.playerData?.name) {
            this.alert({type: 'danger', message: this.props.localization.localize('error-message_missing-name')});
            return;
        }
        isGameRunning().then(res => {
            if(res) {
                this.setState({ showDialog: true });
                return;
            }
            this.createGame();
        });
    }
    
}

const CreateRoomPage = (props) => {
    return( 
        <CreateRoomPageComponent {...props} navigate={useNavigate()} />
    );
}

export default CreateRoomPage;