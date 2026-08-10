import { Briefcase } from 'lucide-react';

interface TimelineItemProps {
  period: string;
  role: string;
  company: string;
  description: string;
}

export default function TimelineItem({ period, role, company, description }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <Briefcase size={16} strokeWidth={2} />
      </div>

      <div className="timeline-content">
        <span className="timeline-period">{period}</span>
        <h3 className="timeline-role">{role}</h3>
        <h4 className="timeline-company">{company}</h4>
        <p className="timeline-desc">{description}</p>
      </div>
    </div>
  );
}