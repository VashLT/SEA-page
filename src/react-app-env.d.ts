/// <reference types="react-scripts" />

interface IntrinsicProps {
    id?: string;
    className?: string;
    onClick?: (e?: React.MouseEvent) => void;
}

interface Isubject {
    name: string;
    link: string;
}

interface Iarea {
    name: string;
    headerColor: string;
    bgColor: string;
    subjectColor: string;
    icon: React.ReactElement;
    link: string;
    subjects: Isubject[];
}

type SubjectProps = Isubject;
type AreaProps = Iarea;

interface BubbleLogoProps {
    tipPosition?: string;
    responsive?: boolean;
}

interface IareaSchedule {
    id: string;
    name: string;
    color: string;
    stripes: Istripe[];
}

interface Istripe {
    time: string;
    tutors: { names?: string[]; }[];
}

type TimeStripeProps = Istripe;

type ScheduleProps = IntrinsicProps & IareaSchedule & {
    disabled?: any;
}

interface Iquestion {
    question: string;
    answer: string;
    id: number;
}

type QuestionProps = Iquestion;

type SelectAreaProps = IntrinsicProps;

interface HorarioPageProps {
    disabled?: any;
}