export interface Subject{
  "id": number;
  "name": string;
  "grade": string;
  "description": string[];
  "feedback": string;
}
export interface Interview{
  "id":number;
  "candidate_name": string,
  "level": string;
  "sub_size": number,
  "subjects": Subject[],
}

export interface Template{
"id" : number,
"title": string,
"subjects": {"name": string,"subject":string[]}[];
}
export const subjects= [{
  id:1,
  name: '.NET Development',
  grade: 'junior',
  description: ['GC','async programming','memory management'],
  feedback: 'He should prepare, he is just intern at this subject'
},
{
  id:2,
  name: 'SQL',
  grade: 'middle',
  description: ['JOIN-s','primary key vs foreign key','DML and DDL'],
  feedback: 'Yes, he is a good at this position',
}]

export const interviews = [{
  id: 1,
  candidate_name: "John Smith",
  level: "junior",
  sub_size: 2,
  subjects: [subjects[0], subjects[1]],
},
{
  id: 2,
  candidate_name: "Ilon Mask",
  level: "senior",
  sub_size: 1,
  subjects: [subjects[1]],
}]

export const templates = [{
  id: 1,
  title: ".NET Developer",
  subjects: [
    {
      name: subjects[0].name,
      subject: subjects[0].description
    },
    {
      name: subjects[1].name,
      subject: subjects[1].description,
    }]},
    {
    id: 2,
    title: "Front-End Developer",
    subjects: [
      {
        name: subjects[1].name,
        subject: subjects[1].description
      },
      {
        name: subjects[0].name,
        subject: subjects[0].description,
      },
  ]},
]



