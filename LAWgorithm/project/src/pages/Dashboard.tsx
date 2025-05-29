import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Scale, MessageSquare, FileText, Users, Clock, ChevronRight, Eye, Download, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const recentDocuments = [
    {
      id: '1',
      title: 'Rent Agreement',
      date: '2023-11-15',
      type: 'PDF',
    },
    {
      id: '2',
      title: 'Power of Attorney',
      date: '2023-11-10',
      type: 'PDF',
    },
    {
      id: '3',
      title: 'Affidavit for Name Change',
      date: '2023-11-05',
      type: 'PDF',
    },
  ];

  const recentQueries = [
    {
      id: '1',
      query: 'What are the requirements for divorce in India?',
      date: '2023-11-16',
      answered: true,
    },
    {
      id: '2',
      query: 'How do I file an RTI application?',
      date: '2023-11-14',
      answered: true,
    },
    {
      id: '3',
      query: 'What is the punishment under Section 420 of IPC?',
      date: '2023-11-12',
      answered: true,
    },
  ];

  const upcomingConsultations = [
    {
      id: '1',
      lawyer: 'Adv. Rajesh Sharma',
      date: '2023-11-20',
      time: '10:00 AM',
      topic: 'Property Dispute',
    },
    {
      id: '2',
      lawyer: 'Adv. Priya Patel',
      date: '2023-11-25',
      time: '2:30 PM',
      topic: 'Divorce Proceedings',
    },
  ];

  // For lawyer accounts
  const clientRequests = [
    {
      id: '1',
      name: 'Rahul Mehta',
      date: '2023-11-18',
      topic: 'Property Dispute',
      status: 'Pending',
    },
    {
      id: '2',
      name: 'Anita Singh',
      date: '2023-11-17',
      topic: 'Divorce Consultation',
      status: 'Accepted',
    },
    {
      id: '3',
      name: 'Vijay Kumar',
      date: '2023-11-16',
      topic: 'Contract Review',
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 text-lg text-neutral-400">
            Welcome back, {user?.name}!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <div className="mb-6 flex items-center space-x-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-900/30">
                  <Scale className="h-8 w-8 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{user?.name}</h2>
                  <p className="text-sm text-neutral-400">{user?.role === 'client' ? 'Client' : 'Lawyer'}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                    activeTab === 'overview'
                      ? 'bg-primary-900/20 text-primary-400'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Overview
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                    activeTab === 'documents'
                      ? 'bg-primary-900/20 text-primary-400'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    <FileText className="mr-3 h-5 w-5" />
                    My Documents
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => setActiveTab('queries')}
                  className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                    activeTab === 'queries'
                      ? 'bg-primary-900/20 text-primary-400'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5" />
                    My Queries
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                
                {user?.role === 'client' ? (
                  <button
                    onClick={() => setActiveTab('consultations')}
                    className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                      activeTab === 'consultations'
                        ? 'bg-primary-900/20 text-primary-400'
                        : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center">
                      <Clock className="mr-3 h-5 w-5" />
                      Consultations
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('clientRequests')}
                    className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                      activeTab === 'clientRequests'
                        ? 'bg-primary-900/20 text-primary-400'
                        : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center">
                      <Users className="mr-3 h-5 w-5" />
                      Client Requests
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left ${
                    activeTab === 'settings'
                      ? 'bg-primary-900/20 text-primary-400'
                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/30 text-primary-400">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{recentDocuments.length}</h3>
                        <p className="text-sm text-neutral-400">Documents</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/30 text-primary-400">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{recentQueries.length}</h3>
                        <p className="text-sm text-neutral-400">Queries</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
                    <div className="flex items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/30 text-primary-400">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{upcomingConsultations.length}</h3>
                        <p className="text-sm text-neutral-400">Consultations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Recent Documents</h3>
                  {recentDocuments.length > 0 ? (
                    <div className="divide-y divide-neutral-800">
                      {recentDocuments.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between py-3">
                          <div>
                            <h4 className="text-sm font-medium text-white">{doc.title}</h4>
                            <p className="text-xs text-neutral-500">{new Date(doc.date).toLocaleDateString()}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-sm text-neutral-500">No documents found</p>
                  )}
                </div>
                
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Recent Queries</h3>
                  {recentQueries.length > 0 ? (
                    <div className="divide-y divide-neutral-800">
                      {recentQueries.map((query) => (
                        <div key={query.id} className="py-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-white">{query.query}</h4>
                              <p className="text-xs text-neutral-500">{new Date(query.date).toLocaleDateString()}</p>
                            </div>
                            {query.answered && (
                              <span className="inline-flex items-center rounded-full bg-success-500/10 px-2 py-1 text-xs font-medium text-success-500">
                                Answered
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-sm text-neutral-500">No queries found</p>
                  )}
                </div>
                
                {user?.role === 'client' ? (
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Upcoming Consultations</h3>
                    {upcomingConsultations.length > 0 ? (
                      <div className="divide-y divide-neutral-800">
                        {upcomingConsultations.map((consultation) => (
                          <div key={consultation.id} className="py-3">
                            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                              <div>
                                <h4 className="text-sm font-medium text-white">{consultation.lawyer}</h4>
                                <p className="text-xs text-neutral-500">{consultation.topic}</p>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <p className="text-xs font-medium text-white">{new Date(consultation.date).toLocaleDateString()}</p>
                                  <p className="text-xs text-neutral-500">{consultation.time}</p>
                                </div>
                                <button className="rounded-md bg-primary-600 px-3 py-1 text-xs font-medium text-white hover:bg-primary-700">
                                  Join
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-sm text-neutral-500">No upcoming consultations</p>
                    )}
                  </div>
                ) : (
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Recent Client Requests</h3>
                    {clientRequests.length > 0 ? (
                      <div className="divide-y divide-neutral-800">
                        {clientRequests.map((request) => (
                          <div key={request.id} className="py-3">
                            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                              <div>
                                <h4 className="text-sm font-medium text-white">{request.name}</h4>
                                <p className="text-xs text-neutral-500">{request.topic}</p>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <p className="text-xs font-medium text-white">{new Date(request.date).toLocaleDateString()}</p>
                                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                    request.status === 'Pending'
                                      ? 'bg-warning-500/10 text-warning-500'
                                      : request.status === 'Accepted'
                                      ? 'bg-primary-500/10 text-primary-400'
                                      : 'bg-success-500/10 text-success-500'
                                  }`}>
                                    {request.status}
                                  </span>
                                </div>
                                {request.status === 'Pending' && (
                                  <button className="rounded-md bg-primary-600 px-3 py-1 text-xs font-medium text-white hover:bg-primary-700">
                                    Accept
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-sm text-neutral-500">No client requests</p>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'documents' && (
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">My Documents</h3>
                  <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Create New
                  </button>
                </div>
                
                {recentDocuments.length > 0 ? (
                  <div className="divide-y divide-neutral-800">
                    {[...recentDocuments, ...recentDocuments].map((doc, index) => (
                      <div key={`${doc.id}-${index}`} className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-800 text-neutral-400">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-white">{doc.title}</h4>
                            <p className="text-xs text-neutral-500">Generated on {new Date(doc.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs font-medium text-white hover:bg-neutral-700">
                            View
                          </button>
                          <button className="rounded-md bg-primary-600 px-3 py-1 text-xs font-medium text-white hover:bg-primary-700">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-sm text-neutral-500">No documents found</p>
                )}
              </div>
            )}
            
            {activeTab === 'queries' && (
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">My Queries</h3>
                  <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Ask New Question
                  </button>
                </div>
                
                {recentQueries.length > 0 ? (
                  <div className="divide-y divide-neutral-800">
                    {[...recentQueries, ...recentQueries].map((query, index) => (
                      <div key={`${query.id}-${index}`} className="py-4">
                        <div className="mb-2 flex items-start justify-between">
                          <h4 className="text-sm font-medium text-white">{query.query}</h4>
                          {query.answered && (
                            <span className="inline-flex items-center rounded-full bg-success-500/10 px-2 py-1 text-xs font-medium text-success-500">
                              Answered
                            </span>
                          )}
                        </div>
                        <p className="mb-2 text-xs text-neutral-500">Asked on {new Date(query.date).toLocaleDateString()}</p>
                        <p className="text-sm text-neutral-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
                        </p>
                        <div className="mt-3 flex items-center space-x-4">
                          <div className="flex items-center">
                            <button className="text-neutral-400 hover:text-primary-400">
                              <Star className="h-4 w-4" />
                            </button>
                            <button className="text-neutral-400 hover:text-primary-400">
                              <Star className="h-4 w-4" />
                            </button>
                            <button className="text-neutral-400 hover:text-primary-400">
                              <Star className="h-4 w-4" />
                            </button>
                            <button className="text-neutral-400 hover:text-primary-400">
                              <Star className="h-4 w-4" />
                            </button>
                            <button className="text-neutral-400 hover:text-primary-400">
                              <Star className="h-4 w-4" />
                            </button>
                          </div>
                          <button className="text-xs text-primary-400 hover:text-primary-300">Rate this answer</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-sm text-neutral-500">No queries found</p>
                )}
              </div>
            )}
            
            {activeTab === 'consultations' && (
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">My Consultations</h3>
                  <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Book Consultation
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="mb-4 text-base font-medium text-white">Upcoming</h4>
                  {upcomingConsultations.length > 0 ? (
                    <div className="divide-y divide-neutral-800">
                      {upcomingConsultations.map((consultation) => (
                        <div key={consultation.id} className="py-4">
                          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                            <div>
                              <h4 className="text-base font-medium text-white">{consultation.lawyer}</h4>
                              <p className="text-sm text-neutral-400">{consultation.topic}</p>
                              <div className="mt-1 flex items-center text-xs text-neutral-500">
                                <Clock className="mr-1 h-3 w-3" />
                                {new Date(consultation.date).toLocaleDateString()} at {consultation.time}
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-700">
                                Reschedule
                              </button>
                              <button className="rounded-md bg-primary-600 px-3 py-1 text-sm font-medium text-white hover:bg-primary-700">
                                Join
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-sm text-neutral-500">No upcoming consultations</p>
                  )}
                </div>
                
                <div>
                  <h4 className="mb-4 text-base font-medium text-white">Past Consultations</h4>
                  <div className="divide-y divide-neutral-800">
                    <div className="py-4">
                      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                        <div>
                          <h4 className="text-base font-medium text-white">Adv. Vikram Malhotra</h4>
                          <p className="text-sm text-neutral-400">Intellectual Property Rights</p>
                          <div className="mt-1 flex items-center text-xs text-neutral-500">
                            <Clock className="mr-1 h-3 w-3" />
                            Nov 10, 2023 at 11:00 AM
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-neutral-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                        <div>
                          <h4 className="text-base font-medium text-white">Adv. Sunita Joshi</h4>
                          <p className="text-sm text-neutral-400">Consumer Rights Dispute</p>
                          <div className="mt-1 flex items-center text-xs text-neutral-500">
                            <Clock className="mr-1 h-3 w-3" />
                            Nov 5, 2023 at 2:30 PM
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'clientRequests' && (
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Client Requests</h3>
                  <div>
                    <select className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                      <option value="all">All Requests</option>
                      <option value="pending">Pending</option>
                      <option value="accepted">Accepted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                
                {clientRequests.length > 0 ? (
                  <div className="divide-y divide-neutral-800">
                    {clientRequests.map((request) => (
                      <div key={request.id} className="py-4">
                        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                          <div>
                            <div className="flex items-center">
                              <h4 className="text-base font-medium text-white">{request.name}</h4>
                              <span className={`ml-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                request.status === 'Pending'
                                  ? 'bg-warning-500/10 text-warning-500'
                                  : request.status === 'Accepted'
                                  ? 'bg-primary-500/10 text-primary-400'
                                  : 'bg-success-500/10 text-success-500'
                              }`}>
                                {request.status}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-400">{request.topic}</p>
                            <div className="mt-1 flex items-center text-xs text-neutral-500">
                              <Clock className="mr-1 h-3 w-3" />
                              Requested on {new Date(request.date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {request.status === 'Pending' ? (
                              <>
                                <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-700">
                                  Decline
                                </button>
                                <button className="rounded-md bg-primary-600 px-3 py-1 text-sm font-medium text-white hover:bg-primary-700">
                                  Accept
                                </button>
                              </>
                            ) : request.status === 'Accepted' ? (
                              <button className="rounded-md bg-primary-600 px-3 py-1 text-sm font-medium text-white hover:bg-primary-700">
                                Schedule
                              </button>
                            ) : (
                              <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-700">
                                View Details
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-sm text-neutral-500">No client requests found</p>
                )}
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Account Settings</h3>
                  <form>
                    <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={user?.name}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={user?.email}
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <button
                      type="button"
                      className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
                
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Security</h3>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="currentPassword" className="mb-2 block text-sm font-medium text-neutral-300">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        placeholder="••••••••"
                        className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-neutral-300">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          placeholder="••••••••"
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-neutral-300">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          placeholder="••••••••"
                          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-neutral-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                    >
                      Change Password
                    </button>
                  </form>
                </div>
                
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-white">Email Notifications</h4>
                        <p className="text-xs text-neutral-400">Receive emails about your account activity</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-neutral-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-800"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-white">SMS Notifications</h4>
                        <p className="text-xs text-neutral-400">Receive text messages for appointment reminders</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-6 w-11 rounded-full bg-neutral-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-800"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-white">Marketing Communications</h4>
                        <p className="text-xs text-neutral-400">Receive updates about new features and promotions</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-neutral-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-800"></div>
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-6 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;