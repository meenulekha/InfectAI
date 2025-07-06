"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Search, Activity } from "lucide-react"

const patients = [
  {
    id: "1",
    name: "Sarah Johnson",
    ward: "Ward 49",
    bedNumber: "204",
    reasonForAdmission: "Post-surgical complications",
    infectionScore: 85,
    riskLevel: "high",
  },
  {
    id: "2",
    name: "Michael Chen",
    ward: "Ward 49",
    bedNumber: "312",
    reasonForAdmission: "Routine colonoscopy",
    infectionScore: 25,
    riskLevel: "low",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    ward: "Ward 49",
    bedNumber: "201",
    reasonForAdmission: "Pneumonia treatment",
    infectionScore: 92,
    riskLevel: "high",
  },
  {
    id: "4",
    name: "David Thompson",
    ward: "Ward 49",
    bedNumber: "205",
    reasonForAdmission: "Appendectomy",
    infectionScore: 55,
    riskLevel: "medium",
  },
  {
    id: "5",
    name: "Lisa Wang",
    ward: "Ward 49",
    bedNumber: "118",
    reasonForAdmission: "Diagnostic imaging",
    infectionScore: 30,
    riskLevel: "low",
  },
  {
    id: "6",
    name: "Robert Martinez",
    ward: "Ward 49",
    bedNumber: "203",
    reasonForAdmission: "Cardiac surgery recovery",
    infectionScore: 88,
    riskLevel: "high",
  },
];

export default function PatientDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [riskFilter, setRiskFilter] = useState("all")

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.reasonForAdmission.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRisk = riskFilter === "all" || patient.riskLevel === riskFilter
    return matchesSearch && matchesRisk
  })

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600 bg-red-50"
    if (score >= 50) return "text-yellow-600 bg-yellow-50"
    return "text-green-600 bg-green-50"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ward 49</h1>
          <p className="text-gray-600">Patients Details of Ward 49</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search patients or conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by risk" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Patient Table */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Ward & Bed</TableHead>
                <TableHead>Reason for Admission</TableHead>
                <TableHead>Infection Risk Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell>
                    <span className="font-medium text-blue-600">{patient.name}</span>
                  </TableCell>
                  <TableCell>
                    {patient.ward}-{patient.bedNumber}
                  </TableCell>
                  <TableCell>
                    {patient.reasonForAdmission}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full font-semibold ${getScoreColor(patient.infectionScore)}`}
                    >
                      <Activity className="h-4 w-4 mr-1" />
                      {patient.infectionScore}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {filteredPatients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No patients found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
