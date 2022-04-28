export interface Subject{
  "id": number;
  "name": string;
  "description": string[];
}
export interface Interview{
  "id":number;
  "candidate_name": string,
  "level": string;
  "email": string,
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
  description: ['GC','async programming','memory management'],
},
{
  id:2,
  name: 'SQL',
  description: ['JOIN-s','primary key vs foreign key','DML and DDL'],
}]

export const interviews = [{
  id: 1,
  candidate_name: "John Smith",
  level: "junior",
  email: "smith@gmail.com",
  sub_size: 2,
  subjects: [subjects[0], subjects[1]],
},
{
  id: 2,
  candidate_name: "Ilon Mask",
  level: "senior",
  email: "ilon@gmail.com",
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
    },]},
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



