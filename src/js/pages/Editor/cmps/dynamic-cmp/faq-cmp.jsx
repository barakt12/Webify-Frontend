import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props) => (
  <MuiAccordion
    sx={{ outline: 'none !important' }}
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    sx={{ outline: 'none !important' }}
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem', outline: 'none !important' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    outline: 'none !important',
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export function FAQCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp }) {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div
      style={cmp.style}
      className={`faq-container ${
        selectedCmp?.id === cmp.id ? 'selected' : ''
      } ${cmp.name}`}
      onClick={(ev) => onSelectCmp(ev, cmp)}
      onMouseOut={(ev) => ev.target.classList.remove('hover')}
      onMouseOver={(ev) => onHoverCmp(ev)}
    >
      {cmp.info.questions.map((question, idx) => {
        return (
          <Accordion
            sx={{ backgroundColor: 'transparent' }}
            key={idx}
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary
              sx={{ outline: 'none !important' }}
              aria-controls={`panel${idx + 1}d-content`}
              id={`panel${idx + 1}d-header`}
            >
              <Typography sx={{ outline: 'none !important' }}>
                {question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ outline: 'none !important' }}>
              <Typography sx={{ outline: 'none !important' }}>
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
