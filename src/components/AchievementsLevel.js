import React from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { RegistrationComponent, RegistrationTextFeild, RegistrationPreferredGames } from '../assets/styles/Registration/RegistrationStyles';

const AchievementsLevel = () => {
    return (
        <div>
            <RegistrationComponent>
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
            </RegistrationComponent>
        </div>
    )
};

export { AchievementsLevel };
