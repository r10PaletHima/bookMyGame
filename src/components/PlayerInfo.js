import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { RegistrationComponent, RegistrationTextFeild, RegistrationPreferredGames } from '../assets/styles/Registration/RegistrationStyles';

const PlayerInfo = () => {
    return (
            <RegistrationComponent>
                <RegistrationTextFeild
                    RegistrationTextFeildid="full-name"
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    fullWidth
                    required
                />
                <RegistrationTextFeild
                    id="email-address"
                    name="email-address"
                    variant="outlined"
                    label="Email Address"
                    fullWidth
                    required
                />
                <RegistrationTextFeild
                    id="contact-number"
                    name="contact-number"
                    variant="outlined"
                    label="Contact Number"
                    fullWidth
                    required
                />
                <RegistrationTextFeild
                    id="current-location"
                    name="current-location"
                    variant="outlined"
                    label="Current Location (From Google)"
                    fullWidth
                    required
                />
                <RegistrationPreferredGames fullWidth>
                    <InputLabel id="preferred-game-label">Select Your Preferred Game *</InputLabel>
                    <Select
                        labelId="preferred-game-label"
                        id="preferred-game"
                        name="preferred-game"
                        multiple
                        variant="outlined"
                        label="Select Your Preferred Game"
                        fullWidth
                        required
                        value={[]}
                    >
                        {/* Replace the MenuItem components with your actual options */}
                        <MenuItem value="game1">Game 1</MenuItem>
                        <MenuItem value="game2">Game 2</MenuItem>
                        <MenuItem value="game3">Game 3</MenuItem>
                    </Select>
                </RegistrationPreferredGames>
                <RegistrationTextFeild
                    id="academy"
                    name="academy"
                    variant="outlined"
                    label="Club or Academy"
                    fullWidth
                    required
                />
                <RegistrationPreferredGames fullWidth>
                    <InputLabel id="Gender">Gender *</InputLabel>
                    <Select
                        labelId="Gender"
                        id="gender"
                        name="gender"
                        variant="outlined"
                        label="Gender"
                        fullWidth
                        required
                        value={[]}
                    >
                        {/* Replace the MenuItem components with your actual options */}
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </RegistrationPreferredGames>
                <RegistrationTextFeild
                    id="bio"
                    name="bio"
                    variant="outlined"
                    label="Short Bio"
                    required
                    fullWidth
                    multiline
                    rows={3}
                />
            </RegistrationComponent>
    )
};

export { PlayerInfo };
