/**
 * PhysicalExaminationResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.jinxin.hospHealth.his.webservice;

public class PhysicalExaminationResponse  implements java.io.Serializable {
    private PhysicalExaminationResponsePhysicalExaminationResult physicalExaminationResult;

    public PhysicalExaminationResponse() {
    }

    public PhysicalExaminationResponse(
           PhysicalExaminationResponsePhysicalExaminationResult physicalExaminationResult) {
           this.physicalExaminationResult = physicalExaminationResult;
    }


    /**
     * Gets the physicalExaminationResult value for this PhysicalExaminationResponse.
     * 
     * @return physicalExaminationResult
     */
    public PhysicalExaminationResponsePhysicalExaminationResult getPhysicalExaminationResult() {
        return physicalExaminationResult;
    }


    /**
     * Sets the physicalExaminationResult value for this PhysicalExaminationResponse.
     * 
     * @param physicalExaminationResult
     */
    public void setPhysicalExaminationResult(PhysicalExaminationResponsePhysicalExaminationResult physicalExaminationResult) {
        this.physicalExaminationResult = physicalExaminationResult;
    }

    private Object __equalsCalc = null;
    public synchronized boolean equals(Object obj) {
        if (!(obj instanceof PhysicalExaminationResponse)) return false;
        PhysicalExaminationResponse other = (PhysicalExaminationResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true &&
            ((this.physicalExaminationResult==null && other.getPhysicalExaminationResult()==null) ||
             (this.physicalExaminationResult!=null &&
              this.physicalExaminationResult.equals(other.getPhysicalExaminationResult())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getPhysicalExaminationResult() != null) {
            _hashCode += getPhysicalExaminationResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(PhysicalExaminationResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">PhysicalExaminationResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("physicalExaminationResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://tempuri.org/", "PhysicalExaminationResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://tempuri.org/", ">>PhysicalExaminationResponse>PhysicalExaminationResult"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           String mechType,
           Class _javaType,
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
