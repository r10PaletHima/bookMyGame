import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { RegistrationComponent, RegistrationTextFeild, RegistrationPreferredGames } from '../assets/styles/Registration/RegistrationStyles';

const RegistrationForm = () => {
    return (
        <div>
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
                 <RegistrationPreferredGames fullWidth>
                    <InputLabel id="player-game-level-label">Player Level (Beginner, Intermediate, Advanced) *</InputLabel>
                    <Select
                        labelId="player-game-level-label"
                        id="player-game-level"
                        name="player-game-level"
                        multiple
                        variant="outlined"
                        label="Player Level (Beginner, Intermediate, Advanced)"
                        fullWidth
                        required
                        value={[]}
                    >
                        {/* Replace the MenuItem components with your actual options */}
                        <MenuItem value="Beginner">Beginner</MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Advanced">Advanced</MenuItem>
                    </Select>
                </RegistrationPreferredGames>
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
                    <InputLabel id="Highest Level or Events Participated">Highest Level or Events Participated *</InputLabel>
                    <Select
                        labelId="Highest Level or Events Participated"
                        id="game-level"
                        name="game-level"
                        variant="outlined"
                        label="Highest Level or Events Participated"
                        fullWidth
                        required
                        value={[]}
                    >
                        {/* Replace the MenuItem components with your actual options */}
                        <MenuItem value="District">District</MenuItem>
                        <MenuItem value="State">State</MenuItem>
                        <MenuItem value="National">National</MenuItem>
                        <MenuItem value="International">International</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                </RegistrationPreferredGames>
                <RegistrationTextFeild
                    id="achievements"
                    name="achievements"
                    variant="outlined"
                    label="Achievements (add text)"
                    fullWidth
                    multiline
                    rows={3}
                />
                <RegistrationTextFeild
                    id="experience"
                    name="experience"
                    variant="outlined"
                    label="Experience (in years)"
                    required
                    fullWidth
                />
                <RegistrationTextFeild
                    id="experience"
                    name="experience"
                    variant="outlined"
                    label="Age (in years)"
                    required
                    fullWidth
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
        </div>
    )
};

export { RegistrationForm };
