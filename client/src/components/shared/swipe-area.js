import React from "react";

/**
 * Wrap a component in a `div` that can be swiped to the left or to the right on mobile devices.
 * When the area is swiped by more than 10% of the screen width, invoke the provided `onSwipeLeft`
 * or `onSwipeRight` methods, respectively.
 * 
 * @property {function} onSwipeLeft The function that is invoked when the user swipes this component to the left
 * @property {function} onSwipeRight The function that is invoked when the user swipes this component to the right
 * @memberof components.shared
 */
class SwipeArea extends React.Component {

    startX;             // remember the position where the swipe started.
    ongoingSwipe;       // keep track of whether a swipe is happening

    constructor(props) {
        super(props);
        this.state = { deltaX: 0 } // used to translate the div along the x axis
    }

    /**
     * handle a touch start event on this component
     * 
     * @param {TouchEvent} e the touch start event to handle
     * @private
     */
    onTouchStart = (e) => {
        // if this is not the only touch, cancel the swipe.
        if(e.touches.length > 1) {
            this.ongoingSwipe = false;
            this.setState({deltaX: 0});
            return;
        }
        // initiate the swipe
        this.ongoingSwipe = true;
        this.startX = e.touches[0].clientX;
    }

    /**
     * handle a touch move event on this component
     * 
     * @param {TouchEvent} e the touch move event to handle
     * @private
     */
    onTouchMove = (e) => {
        if(!this.ongoingSwipe) return;
        this.setState({deltaX: e.touches[0].clientX - this.startX}); // translate the component
    }

    /**
     * handle a touch end event on this component
     * 
     * @param {TouchEvent} e the touch end event to handle
     * @private
     */
    onTouchEnd = (e) => {
        // snap the object back to the starting position
        this.setState({deltaX: 0})
        if(!this.ongoingSwipe) return;
        // if the distance between the start and the end of the swipe is big enough invoke a swipe event
        const dist = e.changedTouches[0].clientX - this.startX;
        const cutoff = window.innerWidth * 0.1;
        if(dist < -cutoff) this.handleLeftSwipe();
        if(dist > cutoff) this.handleRightSwipe();
    }

    /**
     * wrapper function that handles left swipes
     * @private
     */
    handleLeftSwipe = () => {
        if(typeof(this.props.onSwipeLeft) === 'function') this.props.onSwipeLeft();
    }

    /**
     * wrapper function that handles right swipes
     * @private
     */
    handleRightSwipe = () => {
        if(typeof(this.props.onSwipeRight) === 'function') this.props.onSwipeRight();
    }

    /**
     * render the component
     * @private
     */
    render() {
        return(<div onTouchStart={e => this.onTouchStart(e)} onTouchEnd={e => this.onTouchEnd(e)} onTouchMove={e => this.onTouchMove(e)}
            style={{width: '100%', height: '100%', transform: `translate(${this.state.deltaX}px, 0px)`}}>
            {this.props.children}
        </div>);
    }

}

export default SwipeArea;