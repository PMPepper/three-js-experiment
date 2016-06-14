ACPF.registerClass( 'Settings', 'com.asliceofcrazypie.three.engine.shared',
function(){
    
    //controls
    var defaultControls = [
        {//player 1
            modes:{ 
                /*mouseAndKeyboard:{
                    devices:['mouse','keyboard'],
                    inputs:{//TODO true mouse input
                        pitchUp:{input:'keyboard:up|keyboard:w',options:{}},
                        pitchDown:{input:'keyboard:down|keyboard:s',options:{}},
                        yawLeft:{input:'keyboard:left|keyboard:a',options:{}},
                        yawRight:{input:'keyboard:right|keyboard:d',options:{}},
                        rollCW:{input:'keyboard:x',options:{}},
                        rollCCW:{input:'keyboard:z',options:{}},
                        throttleUp:{input:'keyboard:shift',options:{}},
                        throttleDown:{input:'keyboard:ctrl',options:{}},
                        fire:{input:'keyboard:space',options:{}}
                    }
                },*/
                gamepad:{
                    devices:['gamepad0'],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                        fire:{input:'A',options:{}}
                    }
                }
            },
            defaultMode:'gamepad'
        },
        {//player 2
            modes:{ 
                gamepad:{
                    devices:['gamepad1'],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                        fire:{input:'A',options:{}}
                    }
                }
            },
            defaultMode:'gamepad'
        },
        {//player 3
            modes:{ 
                gamepad:{
                    devices:['gamepad3'],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                        fire:{input:'A',options:{}}
                    }
                }
            },
            defaultMode:'gamepad'
        },
        {//player 4
            modes:{ 
                gamepad:{
                    devices:['gamepad4'],
                    inputs:{
                        pitch:{input:'rightY_raw',options:{changed:0.1, deadzone:0.5}},
                        yaw:{input:'rightX_raw',options:{changed:0.1}},
                        roll:{input:'leftX_raw',options:{changed:0.1}},
                        throttle:{input:'leftY_raw',options:{changed:0.1}},
                        fire:{input:'A',options:{}}
                    }
                }
            },
            defaultMode:'gamepad'
        }
    ];
    
    //devices:[/^gamepad[0-9]+$/],
    
    var controls = defaultControls;
    
    
    //TODO extract options from persistent storage
    
    this.getPlayerControls = function getPlayerControls( num ){
        return controls[num-1];
    }
    
    //general game settings
    this.MAX_LOCAL_PLAYERS = 4;
}
);