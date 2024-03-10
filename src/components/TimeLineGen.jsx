import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import Typography from "@mui/material/Typography";

const TimeLineGen = ({ lista }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {lista.map((education, index) => (
        <TimelineItem key={index.toString()}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {education.año}
          </TimelineOppositeContent>
          <TimelineSeparator>

            <TimelineConnector />
            <TimelineDot color="primary">{education.icon}</TimelineDot>
            <TimelineConnector />
          
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" className="flex flex-row gap-2">
            {
                education.img  && (<img src= { education.img } className="h-[30px]" alt = ""/> )
            }
            {education.titulo}
            </Typography>

            {education.descripcion && (
              <Typography component="p">{education.descripcion}</Typography>
            )}

            <Typography>{education.cursado}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLineGen;
