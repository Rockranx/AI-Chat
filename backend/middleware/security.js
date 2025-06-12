import logger from "../utils/logger.js";

// middleware/security.js
export const auditLogger = (req, res, next) => {
  const auditData = {
    timestamp: new Date(),
    user: req.user?.id || 'anonymous',
    method: req.method,
    path: req.path,
    params: req.params,
    ip: req.ip
  };
  
  logger.info('AUDIT_LOG', auditData);
  next();
};

export const suspiciousActivityDetector = (req, res, next) => {
  const sensitiveRoutes = ['/api/auth', '/api/admin'];
  if (sensitiveRoutes.some(route => req.path.startsWith(route))) {
    logger.warn('Sensitive route access detected', {
      ip: req.ip,
      user: req.user?.id,
      path: req.path
    });
  }
  next();
};